export function EmphasizedText({ text }: { text: string }) {
    return text.split('**').map((part, index) =>
        index % 2 === 0 ? part : <strong className="text-white" key={index}>{part}</strong>
    )
}
