import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ status, message }) => {
    return { status, message };
};
