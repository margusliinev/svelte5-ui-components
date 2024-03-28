<script lang="ts">
    import { SidebarLinks } from '.';

    interface SidebarDesktopProps {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar }: SidebarDesktopProps = $props();
</script>

<aside class="hidden w-60 lg:block">
    <SidebarLinks {route} {toggleSidebar} />
</aside>
