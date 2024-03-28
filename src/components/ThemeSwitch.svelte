<script lang="ts">
    import type { SubmitFunction } from '@sveltejs/kit';
    import { Button, Form } from '$components';
    import { Icon } from '$components';

    const submitUpdateTheme: SubmitFunction = ({ formData, cancel }) => {
        const theme = formData.get('theme');

        if (theme === 'dark' || theme === 'light') {
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }

        cancel();
    };
</script>

<Form method="POST" submitFunction={submitUpdateTheme} onsubmit={(e) => e.preventDefault()}>
    <Button style="plain" size="icon" name="theme" value="dark" class="inline-flex dark:hidden" aria-label="Theme Switch">
        <Icon name="sun" size="sm" />
    </Button>
    <Button style="plain" size="icon" name="theme" value="light" class="hidden dark:inline-flex" aria-label="Theme Switch">
        <Icon name="moon" size="sm" />
    </Button>
</Form>
