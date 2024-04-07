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

    let coreStyles =
        'flex capitalize rounded-md px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-0 focus-visible:ring-inset';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<li>
    <a {...rest} {href} class={coreStyles + extraStyles + `${route === href ? ' bg-secondary/20' : ''}`} onclick={toggleSidebar} role="button" tabindex="0">
        {@render children()}
    </a>
</li>
