interface ButtonProps {
    text: string
}

export default function Button({ text }: ButtonProps) {
    return (
        <button className="bg-purple-700 px-2 py-1 rounded-sm hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed">{text}</button>
    )
}