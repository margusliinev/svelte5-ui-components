<script lang="ts">
    import { SidebarLinks } from '.'

    interface DesktopSidebarProps {
        route: string | null
        toggleSidebar: () => void
    }

    let { route, toggleSidebar } = $props<DesktopSidebarProps>()
</script>

<aside class="hidden w-60 lg:grid">
    <SidebarLinks {route} {toggleSidebar} />
</aside>
