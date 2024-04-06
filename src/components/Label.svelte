<script lang="ts">
    import type { HTMLLabelAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLLabelAttributes {
        children: Snippet;
    }

    let { children, ...rest }: Props = $props();

    let labelStyles = 'text-sm capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
</script>

<label {...rest} for={rest.for} class={labelStyles}>{@render children()}</label>
