<script lang="ts">
    import '../styles/fonts.css';
    import '../styles/index.css';
    import { Button, Card, Icon, Link, ThemeSwitch } from '$components';
    import { DesktopSidebar, MobileSidebar } from '$layout';
    let { data, children } = $props();
    console.log(data.route);

    let open = $state(false);

    function toggleSidebar() {
        open = !open;
    }

    $effect(() => {
        let theme = localStorage.getItem('theme');
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    });
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-2xl lg:w-screen-90">
    <header class="flex h-24 grid-cols-[auto_1fr] items-center justify-between lg:grid">
        <div class="w-60">
            <Link href="/" size="icon" class="text-2xl font-black uppercase text-primary">Svelte 5 UI</Link>
        </div>
        <div class="hidden items-center justify-between gap-2 lg:flex">
            <nav class="flex items-center gap-2">
                <Link href="/home" size="sm" class={`${data.route?.split('/')[1] === 'home' ? 'bg-primary/20' : ''}`}>Home</Link>
                <Link href="/examples" size="sm" class={`${data.route?.split('/')[1] === 'examples' ? 'bg-primary/20' : ''}`}>Examples</Link>
                <Link href="https://github.com/margusliinev/svelte5-ui-components" size="sm" target="_blank">GitHub</Link>
            </nav>
            <ThemeSwitch />
        </div>
        <Button style="plain" size="icon" class="lg:hidden" aria-label="menu" onclick={toggleSidebar}>
            <Icon name="menu" />
        </Button>
    </header>
    {#if data.route !== '/examples'}
        <div class="mb-20 grid items-start lg:grid-cols-[auto_1fr]">
            <DesktopSidebar route={data.route} {toggleSidebar} />
            <MobileSidebar route={data.route} {open} {toggleSidebar} />
            <main>
                <Card>{@render children()}</Card>
            </main>
        </div>
    {:else}
        <div class="mb-20">
            <MobileSidebar route={data.route} {open} {toggleSidebar} />
            <main>
                <Card>{@render children()}</Card>
            </main>
        </div>
    {/if}
</div>
