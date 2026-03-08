import { useEffect, useState } from "react"
import { compileMDX } from "../mdx/compiler"
import MDXRenderer from "../mdx/mdx-renderer"
import { mdxComponents } from "../mdx/components"

export default function MessageViewer({ content }: { content: string }) {
    const [code, setCode] = useState<string | null>(null)

    useEffect(() => {
        compileMDX(content).then(setCode)
    }, [content])

    if (!code) return <div>Loading...</div>
    return (
        <MDXRenderer
            code={code}
            components={mdxComponents}
        />
    )
}