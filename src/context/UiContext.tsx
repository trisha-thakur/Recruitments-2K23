"use client";

import React, { createContext, useContext, useState } from 'react';
import { Toast, ToastContextType, ToastProviderProps } from '@/utils/types';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast(): ToastContextType {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

export function ToastProvider({ children } : ToastProviderProps): JSX.Element {
    const [toast, setToast] = useState<Toast | null>(null);

    const showToast: ToastContextType = (message, type = "info") => {
        setToast({ message, type });
        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast && (
                <div className="toast">
                    <div className="alert alert-info bg-primary"><span>{toast.message}</span></div>
                </div>
            )}
        </ToastContext.Provider>
    );
}
