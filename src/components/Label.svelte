<script lang="ts">
    import type { HTMLLabelAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface LabelProps extends HTMLLabelAttributes {
        children: Snippet;
    }

    let { children, ...props }: LabelProps = $props();

    let labelStyles = 'text-sm capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
</script>

<label {...props} for={props.for} class={twMerge(labelStyles, props.class)}>{@render children()}</label>
