import type { LayoutLoad } from './$types';
import { goto } from '$app/navigation';

export const ssr = false;

export const load: LayoutLoad = async ({ route }) => {
    if (!route.id || route.id === '/' || route.id === '/home') goto('/home/alert');

    return { route: route.id };
};
