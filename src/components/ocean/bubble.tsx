import { motion } from "framer-motion"
import { Circle } from "lucide-react"

export default function Bubble({ left, delay }: any) {
    return (
        <motion.div
            className="absolute bottom-0 text-blue-200 opacity-40"
            style={{ left }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -600, opacity: [0, 1, 0] }}
            transition={{
                duration: 10,
                delay,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <Circle size={12} />
        </motion.div>
    )
}