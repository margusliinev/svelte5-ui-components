<script lang="ts">
    import { Button, Icon } from '$components';
    import { SidebarLinks, Logo } from '$layout';

    interface Props {
        open: boolean;
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, open, toggleSidebar }: Props = $props();
</script>

<div class={`fixed inset-0 bg-slate-900/80 transition-opacity duration-500 lg:hidden ${open ? 'z-50 scale-100 opacity-100' : '-z-50 scale-0 opacity-0'}`} aria-hidden="true"></div>
<aside class={`fixed inset-0 z-50 w-64 bg-background transition-all duration-500 lg:hidden ${open ? 'ml-0' : '-ml-96'}`}>
    <Button size="icon" onclick={toggleSidebar} aria-label="close sidebar" class="absolute -right-8 top-9">
        <Icon name="close" stroke="white" />
    </Button>
    <div class="flex h-24 px-8">
        <Logo />
    </div>
    <div class="px-8">
        <SidebarLinks {route} {toggleSidebar} />
    </div>
</aside>
