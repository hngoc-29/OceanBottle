import { useState, useEffect } from "react"
import QRCode from "qrcode"
import { encodeMessage } from "@/crypto/message"

export default function Home() {

    const [message, setMessage] = useState("")
    const [password, setPassword] = useState("")
    const [url, setUrl] = useState("")
    const [qr, setQr] = useState("")
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    async function handleCreate() {
        if (!message) return

        setLoading(true)

        try {
            const data = {
                v: 1,
                c: message,
                t: Date.now()
            }

            const encoded = password
                ? await encodeMessage(data, password)
                : await encodeMessage(data)

            const link = `${location.origin}/?d=${encodeURIComponent(encoded)}`;

            setUrl(link)

        } catch (err) {
            console.error("Create link failed", err)
        }

        setLoading(false)
    }

    async function copyLink() {
        if (!url) return

        try {

            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url)
            } else {

                const textarea = document.createElement("textarea")

                textarea.value = url
                textarea.style.position = "fixed"
                textarea.style.left = "-999999px"
                textarea.style.top = "-999999px"

                document.body.appendChild(textarea)

                textarea.focus()
                textarea.select()

                document.execCommand("copy")

                document.body.removeChild(textarea)
            }

            setCopied(true)
            setTimeout(() => setCopied(false), 2000)

        } catch (err) {
            console.error("Copy failed", err)
        }
    }

    // tạo QR khi có link
    useEffect(() => {
        if (!url) return

        QRCode.toDataURL(url).then(setQr)

    }, [url])

    return (
        <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-b
        from-sky-300
        via-blue-400
        to-blue-800
        p-4">

            <div className="
            w-full
            max-w-lg
            backdrop-blur-xl
            bg-white/20
            border border-white/30
            rounded-2xl
            shadow-2xl
            p-6">

                <h1 className="text-3xl font-bold text-center text-white mb-6">
                    🧴 Message Bottle
                </h1>

                <div className="flex flex-col gap-4">

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your secret message..."
                        className="
                        w-full
                        h-28
                        border border-gray-300
                        rounded-xl
                        p-3
                        bg-white
                        text-black
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password (optional)"
                        className="
                        w-full
                        border border-gray-300
                        rounded-xl
                        p-3
                        bg-white
                        text-black
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-400"
                    />

                    <button
                        onClick={handleCreate}
                        disabled={loading}
                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        disabled:opacity-60
                        text-white
                        font-semibold
                        py-3
                        rounded-xl
                        transition
                        active:scale-95">

                        {loading ? "Creating..." : "Create Secret Link"}

                    </button>

                </div>

                {url && (

                    <div className="mt-6 flex flex-col items-center gap-4">

                        <input
                            readOnly
                            value={url}
                            className="
                            w-full
                            border border-gray-300
                            rounded-lg
                            p-2
                            bg-white
                            text-black"
                        />

                        <div className="flex gap-3">

                            <button
                                onClick={copyLink}
                                className="
                                px-4 py-2
                                bg-green-500
                                hover:bg-green-600
                                text-white
                                rounded-lg
                                transition">

                                {copied ? "Copied!" : "Copy"}

                            </button>

                            {qr && (
                                <a
                                    href={qr}
                                    download="qr.png"
                                    className="
                                    px-4 py-2
                                    bg-purple-500
                                    hover:bg-purple-600
                                    text-white
                                    rounded-lg
                                    transition">
                                    Download QR
                                </a>
                            )}

                        </div>

                        {qr && (

                            <img
                                src={qr}
                                alt="QR Code"
                                className="
                                w-44
                                h-44
                                bg-white
                                p-2
                                rounded-lg
                                shadow"
                            />

                        )}

                    </div>

                )}

            </div>

        </div>
    )
}