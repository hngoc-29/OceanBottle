import { motion } from "framer-motion"
import { Sprout } from "lucide-react"

export default function Seaweed({ left }: { left: string }) {
    return (
        <motion.div
            className="absolute bottom-0 text-green-700"
            style={{ left }}
            animate={{ rotate: [-6, 6, -6] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Sprout size={60} />
        </motion.div>
    )
}