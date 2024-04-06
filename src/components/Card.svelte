<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    let { children, ...rest }: Props = $props();

    let cardStyles = 'h-full w-full rounded-md border border-border bg-card p-6 shadow-sm';
</script>

<div {...rest} class={`${cardStyles} ${rest.class}`}>{@render children()}</div>
