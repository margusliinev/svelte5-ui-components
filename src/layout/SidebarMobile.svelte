<script lang="ts">
    import { Button, Icon, Link } from '$components';
    import { SidebarLinks } from '.';

    interface MobileSidebarProps {
        route: string | null;
        open: boolean;
        toggleSidebar: () => void;
    }

    let { route, open, toggleSidebar }: MobileSidebarProps = $props();
</script>

<div class={`fixed inset-0 bg-slate-900/80 transition-opacity duration-500 dark:bg-zinc-900/80 lg:hidden ${open ? 'z-50 scale-100 opacity-100' : '-z-50 scale-0 opacity-0'}`} aria-hidden="true"></div>
<aside class={`fixed inset-0 z-50 w-64 bg-background transition-all duration-500 lg:hidden ${open ? 'ml-0' : '-ml-96'}`}>
    <Button size="icon" style="plain" onclick={toggleSidebar} aria-label="close sidebar" class="absolute -right-8 top-9">
        <Icon name="close" stroke="white" />
    </Button>
    <div class="flex h-24 px-8">
        <Link href="/" size="icon" class="text-2xl font-black uppercase text-primary">Svelte 5 UI</Link>
    </div>
    <div class="px-8">
        <SidebarLinks {route} {toggleSidebar} />
    </div>
</aside>
