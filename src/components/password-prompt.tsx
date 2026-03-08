import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"

type Props = {
    onSubmit: (password: string) => void
}

export default function PasswordPrompt({ onSubmit }: Props) {

    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onSubmit(password)
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center">

            {/* overlay blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <div
                className="
        relative
        w-[360px]
        p-7
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        text-white
        animate-float
        animate-glow
        "
            >

                {/* top icon */}
                <div className="flex flex-col items-center gap-3 mb-6">

                    <div
                        className="
            p-4
            rounded-full
            bg-blue-500/20
            border border-blue-400/30
            shadow-lg
            "
                    >
                        <Lock className="w-6 h-6 text-blue-300" />
                    </div>

                    <div className="text-center">
                        <p className="text-white/70 text-sm">
                            A secret bottle was found
                        </p>

                        <h2 className="text-xl font-semibold">
                            Enter password
                        </h2>
                    </div>

                </div>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <Input
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="
            bg-white/20
            border-white/30
            text-white
            placeholder:text-white/60
            focus-visible:ring-blue-400
            focus-visible:ring-2
            transition-all
            "
                    />

                    <Button
                        type="submit"
                        className="
            w-full
            bg-linear-to-r
            from-blue-500
            to-cyan-400
            hover:from-blue-600
            hover:to-cyan-500
            text-white
            shadow-lg
            transition-all
            "
                    >
                        Open Bottle
                    </Button>

                </form>

            </div>
        </div>
    )
}