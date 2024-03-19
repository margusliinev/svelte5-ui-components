<script lang="ts">
    import { SidebarLinks } from '.';

    interface DesktopSidebarProps {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar }: DesktopSidebarProps = $props();
</script>

<aside class="hidden w-60 lg:block">
    <SidebarLinks {route} {toggleSidebar} />
</aside>
