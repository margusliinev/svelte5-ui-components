<script lang="ts">
    import { Button, Icon } from '$components';

    const updateTheme = (e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
        e.preventDefault();
        localStorage.setItem('theme', e.currentTarget.value);
        document.documentElement.setAttribute('data-theme', e.currentTarget.value);
    };
</script>

<Button size="icon" name="theme" value="dark" class="inline-flex dark:hidden" aria-label="Theme Switch" onclick={(e) => updateTheme(e)}>
    <Icon name="sun" size="sm" />
</Button>
<Button size="icon" name="theme" value="light" class="hidden dark:inline-flex" aria-label="Theme Switch" onclick={(e) => updateTheme(e)}>
    <Icon name="moon" size="sm" />
</Button>
