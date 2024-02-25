<script lang="ts">
    /* eslint-disable */
    import type { SubmitFunction } from '@sveltejs/kit'
    import { Button, Form } from '$components'
    import { page } from '$app/stores'
    import { Icon } from '$components'

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme')

        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }
</script>

<Form submitFunction={submitUpdateTheme}>
    <Button style="plain" size="icon" formaction="/?/setTheme&theme=dark&redirectTo={$page.url}" class="inline-flex dark:hidden" aria-label="Theme Switch">
        <Icon name="sun" size="sm" />
    </Button>
    <Button style="plain" size="icon" formaction="/?/setTheme&theme=light&redirectTo={$page.url}" class="hidden dark:inline-flex" aria-label="Theme Switch">
        <Icon name="moon" size="sm" />
    </Button>
</Form>
