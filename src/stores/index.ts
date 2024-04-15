import { writable } from 'svelte/store';

interface ToastOptions {
    title?: string;
    message: string;
    timeout?: number;
    type: 'success' | 'warning' | 'danger' | 'info';
}

interface Toast extends ToastOptions {
    id: number;
}

export const toastStore = writable<Array<Toast>>([]);

export function showToast({ title, message, timeout, type }: ToastOptions) {
    const toast: Toast = { id: Math.random(), title, message, timeout, type };
    toastStore.update((toasts) => [...toasts, toast]);
    setTimeout(() => removeToast(toast.id), timeout ?? 5000);
}

export function removeToast(id: number) {
    toastStore.update((toasts) => toasts.filter((toast) => toast.id !== id));
}
