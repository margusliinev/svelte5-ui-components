import { redirect } from '@sveltejs/kit'

export const load = async ({ route }) => {
    if (route.id === '/') throw redirect(302, '/home/alert')
    if (route.id === '/home') throw redirect(302, '/home/alert')

    return { route: route.id }
}
