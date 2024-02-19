<script lang="ts">
    import { Icon, Link } from '$components'
    import { SidebarLinks } from '.'

    interface MobileSidebarProps {
        route: string | null
        open: boolean
        toggleSidebar: () => void
    }

    let { route, open, toggleSidebar } = $props<MobileSidebarProps>()
</script>

<div class={open ? 'fixed inset-0 z-50 bg-gray-900/80 transition-opacity duration-500 lg:hidden' : 'fixed inset-0 -z-50 -ml-96 opacity-0 transition-opacity duration-500 lg:hidden'}></div>
<aside
    class={open
        ? 'min-h-sreen fixed inset-0 z-50 ml-0 flex w-64 flex-col bg-background-hover shadow-xl transition-all duration-300 lg:hidden'
        : 'fixed inset-0 z-50 -ml-96 min-h-screen w-64 bg-background-hover transition-all duration-300 xl:hidden'}
>
    <button
        type="button"
        onclick={toggleSidebar}
        aria-label="close menu"
        class={open ? 'absolute -right-8 top-5 text-white opacity-100 transition-opacity duration-500' : 'absolute -right-8 top-5 text-white opacity-0 transition-opacity duration-500'}
    >
        <Icon name="close" />
    </button>
    <div class="grid h-24 self-start px-8">
        <Link href="/" size="icon" class="text-2xl font-black uppercase italic text-primary">Svelte 5 UI</Link>
    </div>
    <div class="justify-self-start px-8">
        <SidebarLinks {route} {toggleSidebar} />
    </div>
</aside>
