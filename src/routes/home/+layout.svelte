<script lang="ts">
    import { Button, Icon, Link, ThemeSwitch } from '$components'
    import DesktopSidebar from '../../layout/DesktopSidebar.svelte'
    import MobileSidebar from '../../layout/MobileSidebar.svelte'

    let { data } = $props()

    let open = $state(false)
    let route = $state(data.route)

    function toggleSidebar() {
        open = !open
    }
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-2xl lg:w-screen-90">
    <header class="flex h-24 grid-cols-[auto_1fr] items-center justify-between lg:grid">
        <div class="w-60">
            <Link href="/" size="icon" class="text-2xl font-black uppercase text-primary">Svelte 5 UI</Link>
        </div>
        <div class="hidden items-center justify-between gap-2 lg:flex">
            <nav class="flex items-center gap-2">
                <Link href="/home" size="sm" class={`${route?.split('/')[1] === 'home' ? 'bg-primary/20' : ''}`}>Home</Link>
                <Link href="/examples" size="sm" class={`${route?.split('/')[1] === 'examples' ? 'bg-primary/20' : ''}`}>Examples</Link>
                <Link href="https://github.com/margusliinev/svelte5-ui-components" size="sm" target="_blank" class={`${route?.split('/')[1] === 'github' ? 'bg-primary/20' : ''}`}>GitHub</Link>
            </nav>
            <ThemeSwitch />
        </div>
        <Button variant="plain" size="icon" class="lg:hidden" aria-label="menu" onclick={toggleSidebar}>
            <Icon name="menu" />
        </Button>
    </header>
    <div class="mb-20 grid items-start lg:grid-cols-[auto_1fr]">
        <DesktopSidebar route={data.route} {toggleSidebar} />
        <MobileSidebar route={data.route} {open} {toggleSidebar} />
        <main class="h-full w-full rounded-md border border-border bg-card p-6 shadow-sm">
            <h1 class="mb-6 text-xl font-medium capitalize">
                Components / {`${route?.split('/')[2]}`}
            </h1>
            <slot />
        </main>
    </div>
</div>
