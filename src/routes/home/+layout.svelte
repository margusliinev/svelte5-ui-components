<script lang="ts">
    import { Button, Card, Icon, Link } from '$components';
    import { Logo, SidebarDesktop, SidebarMobile } from '$layout';
    let { children, data } = $props();

    let open = $state(false);

    function toggleSidebar() {
        open = !open;
    }
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-2xl lg:w-screen-90">
    <header class="flex h-24 grid-cols-[auto_1fr] items-center justify-between lg:grid">
        <div class="w-60">
            <Logo />
        </div>
        <div class="hidden items-center justify-between gap-2 lg:flex">
            <nav class="flex items-center gap-2">
                <Link href="/home/alert" size="sm" class={`${data.route?.split('/')[1] === 'home' ? '!bg-primary/20' : ''}`}>Home</Link>
                <Link href="https://github.com/margusliinev/svelte5-ui-components" size="sm" target="_blank">GitHub</Link>
            </nav>
        </div>
        <Button size="icon" class="lg:hidden" aria-label="menu" onclick={toggleSidebar}>
            <Icon name="menu" />
        </Button>
    </header>
    <div class="mb-20 grid items-start lg:grid-cols-[auto_1fr]">
        <SidebarDesktop route={data.route} {toggleSidebar} />
        <SidebarMobile route={data.route} {open} {toggleSidebar} />
        <main>
            <Card>
                <h1 class="mb-6 text-xl font-medium capitalize">Components / {`${data.route?.split('/')[2]}`}</h1>
                {@render children()}
            </Card>
        </main>
    </div>
</div>
