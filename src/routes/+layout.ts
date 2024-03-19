import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load = async ({ route }) => {
    if (route.id === null || route.id === '/' || route.id === '/home') {
        throw redirect(303, '/home/alert');
    }

    return { route: route.id };
};
