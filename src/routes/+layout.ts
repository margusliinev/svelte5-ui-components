export const ssr = false;

import { goto } from '$app/navigation';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ route }) => {
    if (!route.id || route.id === '/' || route.id === '/home') goto('/home/alert');

    return { route: route.id };
};
