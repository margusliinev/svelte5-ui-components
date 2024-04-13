<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAnchorAttributes {
        children: Snippet;
        toggleSidebar: () => void;
        route: string | null;
        href: string;
    }

    let { children, toggleSidebar, route, href, ...rest }: Props = $props();

    let coreStyles = 'flex capitalize rounded-md text-sm px-4 py-2 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-foreground';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<a {...rest} {href} class={coreStyles + extraStyles + `${route === href ? ' bg-primary/20' : ''}`} onclick={toggleSidebar} role="button" tabindex="0">
    {@render children()}
</a>
