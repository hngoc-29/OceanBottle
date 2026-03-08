export function bufToBase64(buf: ArrayBuffer | Uint8Array): string {

    const bytes = buf instanceof Uint8Array
        ? buf
        : new Uint8Array(buf)

    let binary = ""

    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i])
    }

    return btoa(binary)
}

export function base64ToBuf(base64: string): Uint8Array {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0))
}