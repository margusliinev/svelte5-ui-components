<script lang="ts">
    /* eslint-disable */
    import type { SubmitFunction } from '@sveltejs/kit'
    import { Button } from '$components'
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
    import { Icon } from '$components'

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme')

        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }
</script>

<form method="post" use:enhance={submitUpdateTheme}>
    <Button variant="link" size="icon" formaction="/?/setTheme&theme=dark&redirectTo={$page.url}" class="inline-flex dark:hidden">
        <Icon name="sun" size="sm" />
    </Button>
    <Button variant="link" size="icon" formaction="/?/setTheme&theme=light&redirectTo={$page.url}" class="hidden dark:inline-flex">
        <Icon name="moon" size="sm" />
    </Button>
</form>
