import { motion } from "framer-motion"
import BottleIcon from '@/assets/bottle.png'
import MessageDialog from "../message/message-dialog"

export default function Bottle({ message }: any) {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <MessageDialog message={message}>
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="cursor-pointer"
                >
                    {/* <Milk size={64} className="text-amber-700 drop-shadow-xl" /> */}
                    <img src={BottleIcon} alt="Bottle" className="w-30 rotate-12 drop-shadow-xl" />
                </motion.div>
            </MessageDialog>
        </div>
    )
}