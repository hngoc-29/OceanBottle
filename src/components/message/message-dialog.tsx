import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog"

import MessageViewer from "../message-viewer"

export default function MessageDialog({ children, message }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>

            <DialogContent
                className="
                max-w-lg 
                border-blue-300/40
                bg-linear-to-b
                from-sky-200/80 
                via-blue-300/70 
                to-blue-600/80
                backdrop-blur-xl
                shadow-2xl
                text-white
                overflow-hidden
            "
            >

                {/* background bubbles */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute w-20 h-20 bg-white/30 rounded-full blur-xl top-4 left-6" />
                    <div className="absolute w-16 h-16 bg-white/20 rounded-full blur-xl bottom-10 right-10" />
                    <div className="absolute w-10 h-10 bg-white/30 rounded-full blur-lg top-1/2 left-1/3" />
                </div>

                {/* title */}
                <DialogTitle className="text-xl font-semibold text-white tracking-wide">
                    🌊 Ocean Message
                </DialogTitle>

                <DialogDescription className="sr-only">
                    Message details
                </DialogDescription>

                {/* content */}
                <div className="relative prose prose-invert max-w-none 
                bg-blue-900/30 
                border border-white/20 
                rounded-lg 
                p-4 
                backdrop-blur-md
                ">

                    <MessageViewer content={message} />

                </div>
            </DialogContent>
        </Dialog>
    )
}