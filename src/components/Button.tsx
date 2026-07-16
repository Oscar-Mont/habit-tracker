import type { ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost-destructive" | "date" | "date-success"
type ButtonProps = {
    children: ReactNode,
    disabled?: boolean,
    variant?: Variant,
    onClick?: () => void
}

export default function Button({ children, disabled = false, variant = "primary", onClick }: ButtonProps) {
    return (
        <button disabled={disabled} onClick={onClick} className={`${getVariantStyles(variant)} p-2 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed`}>{children}</button>
    )
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "bg-red-600 hover:bg-red-900 hover:text-red-500"
        case "date":
            return "flex flex-1 flex-col items-center gap-0.5 rounded-xl text-xs border-1 border-white-700 hover:bg-zinc-700"
        case "date-success":
            return "flex flex-1 flex-col items-center gap-0.5 rounded-xl text-xs border-1 bg-green-500 border-green-700 hover:bg-green-300"
        default:
            throw new Error(`Invalid Variant: ${variant satisfies never}`)
    }
}