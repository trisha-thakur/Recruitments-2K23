import { RegisterInterface } from "@/utils/types";

const RegEx : RegisterInterface = { 
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    registerNo: /^RA2[0-9]{7}$/,
    email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    srmEmail: /^[a-zA-Z0-9+_.-]+@srmist.edu.in$/,
    phone: /^[0-9]{10}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
}

export const validateInput = (value: string | undefined, label: keyof RegisterInterface) => {
    return RegEx[label].test(value as string)
}