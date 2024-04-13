<script lang="ts">
    import { SidebarLinks } from '.';

    interface Props {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar }: Props = $props();
</script>

<aside class="hidden w-60 lg:block">
    <SidebarLinks {route} {toggleSidebar} />
</aside>
