import { bufToBase64, base64ToBuf } from "./base64"
import { deriveKey } from "./key"

function utf8ToBase64(str: string) {
    return btoa(String.fromCharCode(...new TextEncoder().encode(str)))
}

function base64ToUtf8(b64: string) {
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0))
    return new TextDecoder().decode(bytes)
}

export async function encodeMessage(
    data: unknown,
    password?: string
): Promise<string> {

    const json = JSON.stringify(data)
    const enc = new TextEncoder()

    if (!(password?.trim())) {
        return utf8ToBase64(json)
    }

    const salt = crypto.getRandomValues(new Uint8Array(16))
    const iv = crypto.getRandomValues(new Uint8Array(12))

    const key = await deriveKey(password, salt)

    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv as BufferSource },
        key,
        enc.encode(json) as BufferSource
    )

    const payload = {
        c: bufToBase64(encrypted),
        iv: bufToBase64(iv),
        s: bufToBase64(salt)
    }

    return utf8ToBase64(JSON.stringify(payload))
}

export async function decodeMessage(
    encoded: string,
    password?: string
) {

    const decoded = base64ToUtf8(encoded)
    const parsed = JSON.parse(decoded)

    if (!parsed.iv) {
        return parsed
    }

    if (!password) {
        throw new Error("PASSWORD_REQUIRED")
    }

    const ciphertext = base64ToBuf(parsed.c)
    const iv = base64ToBuf(parsed.iv)
    const salt = base64ToBuf(parsed.s)

    const key = await deriveKey(password, salt)

    const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv as BufferSource },
        key,
        ciphertext as BufferSource
    )

    const dec = new TextDecoder()

    return JSON.parse(dec.decode(decrypted))
}