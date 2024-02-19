<script lang="ts">
    import { Icon, Link, ThemeSwitch } from '$components'
    import DesktopSidebar from '../../layout/DesktopSidebar.svelte'
    import MobileSidebar from '../../layout/MobileSidebar.svelte'

    let { data } = $props()

    let open = $state(false)

    function toggleSidebar() {
        open = !open
    }
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-2xl lg:w-screen-90">
    <header class="flex h-24 grid-cols-[auto_1fr] items-center justify-between lg:grid">
        <div class="w-60">
            <Link href="/" size="icon" class="text-2xl font-black uppercase italic text-primary">Svelte 5 UI</Link>
        </div>
        <div class="hidden items-center justify-between lg:flex">
            <nav>
                <ul class="flex items-center gap-4">
                    <li>
                        <Link href="/home" size="sm" class="bg-primary/20 text-primary hover:bg-primary/30">Home</Link>
                    </li>
                    <li>
                        <Link href="/examples" size="sm" class="bg-primary/20 text-primary hover:bg-primary/30">Examples</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/margusliinev/svelte5-ui-components" size="sm" target="_blank" class="bg-primary/20 text-primary hover:bg-primary/30">GitHub</Link>
                    </li>
                </ul>
            </nav>
            <ThemeSwitch />
        </div>
        <button class="block cursor-pointer lg:hidden" aria-label="menu" onclick={toggleSidebar}>
            <Icon name="menu" />
        </button>
    </header>
    <div class="mb-20 grid items-start lg:grid-cols-[auto_1fr]">
        <DesktopSidebar route={data.route} {toggleSidebar} />
        <MobileSidebar route={data.route} {open} {toggleSidebar} />
        <main class="h-full w-full rounded-md border border-border bg-card p-6 shadow-sm">
            <h1 class="mb-6 text-xl font-medium capitalize">
                Components / {`${data?.route?.split('/')[2]}`}
            </h1>
            <slot />
        </main>
    </div>
</div>
