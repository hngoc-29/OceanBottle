import { ScrollArea } from "@/components/ui/scroll-area"
import MDXRenderer from "@/mdx/mdx-renderer"

export default function MessageViewer({ content }: any) {
    return (
        <ScrollArea className="max-h-[60vh] pr-4">
            <MDXRenderer code={content} />
        </ScrollArea>
    )
}