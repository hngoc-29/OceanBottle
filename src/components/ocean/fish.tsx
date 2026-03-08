import { motion } from "framer-motion"
import { Fish } from "lucide-react"

export default function OceanFish({ delay, top }: any) {
    return (
        <motion.div
            className="absolute text-cyan-200"
            style={{ top }}
            initial={{ x: -100 }}
            animate={{ x: "110vw" }}
            transition={{
                duration: 20,
                repeat: Infinity,
                delay,
                ease: "linear"
            }}
        >
            <Fish size={40} />
        </motion.div>
    )
}