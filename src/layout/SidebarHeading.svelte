<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        children: Snippet;
    }

    let { children, ...rest }: Props = $props();

    let coreStyles = 'mb-2 text-xs font-medium uppercase text-secondary-foreground';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<h4 class={coreStyles + extraStyles}>{@render children()}</h4>
