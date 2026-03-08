export const mdxComponents = {
    h1: ({ className = "", ...props }: any) => (
        <h1
            className={`scroll-m-20 text-4xl font-bold tracking-tight mt-6 ${className}`}
            {...props}
        />
    ),

    h2: ({ className = "", ...props }: any) => (
        <h2
            className={`scroll-m-20 text-3xl font-semibold mt-6 ${className}`}
            {...props}
        />
    ),

    h3: ({ className = "", ...props }: any) => (
        <h3
            className={`scroll-m-20 text-2xl font-semibold mt-5 ${className}`}
            {...props}
        />
    ),

    h4: ({ className = "", ...props }: any) => (
        <h4
            className={`scroll-m-20 text-xl font-semibold mt-4 ${className}`}
            {...props}
        />
    ),

    p: ({ className = "", ...props }: any) => (
        <p
            className={`leading-7 mt-3 break-words ${className}`}
            {...props}
        />
    ),

    a: ({ className = "", ...props }: any) => (
        <a
            className={`text-blue-500 underline underline-offset-4 hover:text-blue-400 ${className}`}
            {...props}
        />
    ),

    strong: ({ className = "", ...props }: any) => (
        <strong className={`font-semibold ${className}`} {...props} />
    ),

    em: ({ className = "", ...props }: any) => (
        <em className={`italic ${className}`} {...props} />
    ),

    ul: ({ className = "", ...props }: any) => (
        <ul className={`list-disc ml-6 mt-3 ${className}`} {...props} />
    ),

    ol: ({ className = "", ...props }: any) => (
        <ol className={`list-decimal ml-6 mt-3 ${className}`} {...props} />
    ),

    li: ({ className = "", ...props }: any) => (
        <li className={`mt-1 ${className}`} {...props} />
    ),

    blockquote: ({ className = "", ...props }: any) => (
        <blockquote
            className={`border-l-4 border-blue-400 pl-4 italic opacity-80 my-4 ${className}`}
            {...props}
        />
    ),

    code: ({ className = "", ...props }: any) => (
        <code
            className={`bg-black/40 text-emerald-300 px-1 py-0.5 rounded text-sm break-all ${className}`}
            {...props}
        />
    ),

    pre: ({ className = "", ...props }: any) => (
        <pre
            className={`bg-black/60 text-white p-4 rounded-lg overflow-x-auto my-4 ${className}`}
            {...props}
        />
    ),

    hr: (props: any) => (
        <hr className="my-6 border-white/20" {...props} />
    ),

    table: ({ className = "", ...props }: any) => (
        <div className="overflow-x-auto my-4">
            <table className={`w-full border-collapse ${className}`} {...props} />
        </div>
    ),

    th: ({ className = "", ...props }: any) => (
        <th
            className={`border px-3 py-2 bg-white/10 text-left ${className}`}
            {...props}
        />
    ),

    td: ({ className = "", ...props }: any) => (
        <td
            className={`border px-3 py-2 ${className}`}
            {...props}
        />
    ),

    img: ({ className = "", ...props }: any) => (
        <img
            className={`rounded-lg my-4 ${className}`}
            {...props}
        />
    )
};