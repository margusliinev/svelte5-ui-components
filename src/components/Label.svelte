<script lang="ts">
    import type { HTMLLabelAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLLabelAttributes {
        children: Snippet;
    }

    let { children, ...rest }: Props = $props();

    let coreStyles = 'text-sm capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<label {...rest} for={rest.for} class={coreStyles + extraStyles}>{@render children()}</label>
