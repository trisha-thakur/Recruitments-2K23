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

export interface RegisterInterface {
    name: RegExp
    registerNo: RegExp
    email: RegExp
    srmEmail: RegExp
    phone: RegExp
    password: RegExp
}