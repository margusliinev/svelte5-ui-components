<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        id: string;
    }

    let { children, id, ...rest }: Props = $props();

    let coreStyles = 'text-sm text-input-invalid';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {id} {...rest} class={coreStyles + extraStyles} role="alert">{@render children?.()}</div>
