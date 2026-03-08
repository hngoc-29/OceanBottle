import { compile } from "@mdx-js/mdx"

export async function compileMDX(source: string) {
    const compiled = await compile(source, {
        outputFormat: "function-body",
        providerImportSource: "@mdx-js/react"
    })

    return String(compiled)
}