export {};

declare global {
    var mongoose: {
      promise: ReturnType<typeof connect> | null;
      conn: typeof _mongoose | null;
    };
    interface Window {
        loading: HTMLDialogElement,
    };
}

export interface InputProps {
    label: string
    type: string
    placeholder?: string
    value?: string
    ref: React.RefObject<HTMLInputElement>
}

export interface RegisterInterface {
    name: RegExp
    registerNo: RegExp
    email: RegExp
    srmEmail: RegExp
    phone: RegExp
}

export interface IApplicant{
    name: string
    email: string
    srmEmail: string
    registerNo: string
    year?: string
    phone: string
    address: string
    dob: string
    socials?: {
        instagram: string
        linkedin: string
        twitter: string
        github: string
    }
    domain: string
    subDomain: string
    submission: string
    createdAt?: string
    updatedAt?: string
    __v?: number
    _id?: string
}

export interface Toast {
    message: string;
    type: 'info' | 'error' | 'success';
}
export interface ToastContextType {
    (message: string, type?: 'info' | 'error' | 'success'): void;
}
export interface ToastProviderProps {
    children: ReactNode;
}
export interface ITask {
    [key: string]: {
        [key: string]: Array<string> | string;
    };
}
