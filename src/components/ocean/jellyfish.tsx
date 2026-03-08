import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function Jellyfish({ left, delay }: any) {
    return (
        <motion.div
            className="absolute text-pink-300"
            style={{ left }}
            initial={{ y: "100vh" }}
            animate={{ y: "-10vh" }}
            transition={{
                duration: 25,
                delay,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <Sparkles size={36} />
        </motion.div>
    )
}