import { redirect } from '@sveltejs/kit'

export const load = async ({ route }) => {
    if (route.id === '/') throw redirect(303, '/home/alert')
    if (route.id === '/home') throw redirect(303, '/home/alert')

    return { route: route.id }
}
