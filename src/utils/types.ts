export {};

declare global {
    interface Window {
        sign_in: HTMLDialogElement,
    }
}
export interface InputProps {
    label: string
    type: string
    placeholder?: string
    ref: React.RefObject<HTMLInputElement>
}