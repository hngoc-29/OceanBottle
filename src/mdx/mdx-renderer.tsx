import { useMemo } from "react"
import * as runtime from "react/jsx-runtime"
import { MDXProvider } from "@mdx-js/react"

type Props = {
    code: string
    components?: any
}

export default function MDXRenderer({ code, components = {} }: Props) {
    const Content = useMemo(() => {
        const scope = {
            ...runtime,
            useMDXComponents: () => components
        }

        const fn = new Function(
            "opts",
            `${code}`
        )

        const module = fn(scope)

        return module.default
    }, [code, components])

    return (
        <MDXProvider components={components}>
            <Content />
        </MDXProvider>
    )
}