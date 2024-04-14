<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
    }

    let { children, ...rest }: Props = $props();

    let coreStyles = 'h-full w-full rounded-md border border-border bg-card p-6 shadow-card';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>{@render children?.()}</div>
