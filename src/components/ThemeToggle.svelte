<script lang="ts">
    /* eslint-disable */
    import type { SubmitFunction } from '@sveltejs/kit'
    import { Button } from '$components'
    import { page } from '$app/stores'
    import { enhance } from '$app/forms'
    import Icon from '../icons/Icon.svelte'

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme')

        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }
</script>

<form method="post" use:enhance={submitUpdateTheme}>
    <Button variant="icon" size="none" formaction="/?/setTheme&theme=dark&redirectTo={$page.url}" class="inline-flex dark:hidden">
        <Icon name="sun" size="sm" strokeWidth="2" />
    </Button>
    <Button variant="icon" size="none" formaction="/?/setTheme&theme=light&redirectTo={$page.url}" class="hidden dark:inline-flex">
        <Icon name="moon" size="sm" strokeWidth="2" />
    </Button>
</form>
