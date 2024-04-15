import { writable } from 'svelte/store';

interface ToastOptions {
    title?: string;
    description: string;
    type: 'success' | 'warning' | 'danger' | 'info';
}

interface Toast extends ToastOptions {
    id: number;
}

export const toastStore = writable<Array<Toast>>([]);

export function showToast({ title, description, type }: ToastOptions) {
    const toast: Toast = { id: Math.random(), title, description, type };
    toastStore.update((toasts) => [...toasts, toast]);
    setTimeout(() => removeToast(toast.id), 5000);
}

export function removeToast(id: number) {
    toastStore.update((toasts) => toasts.filter((toast) => toast.id !== id));
}
