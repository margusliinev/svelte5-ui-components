export const ssr = false;

import { goto } from '$app/navigation';

export const load = async ({ route }) => {
    if (route.id === null || route.id === '/' || route.id === '/home') {
        goto('/home/alert');
    }

    return { route: route.id };
};
