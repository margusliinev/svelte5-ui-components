<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLFormAttributes {
        children: Snippet;
    }

    let { children, ...rest }: Props = $props();
</script>

<form {...rest} method="POST">{@render children()}</form>
