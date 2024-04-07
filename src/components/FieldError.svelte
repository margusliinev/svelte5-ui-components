<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
        id: string;
    }

    let { children, id, ...rest }: Props = $props();

    let errorStyles = 'text-sm text-input-invalid';
</script>

<div {id} {...rest} class={`${errorStyles} ${rest.class}`} role="alert">{@render children()}</div>
