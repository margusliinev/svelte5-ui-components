<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface FormProps extends HTMLFormAttributes {
        children: Snippet;
    }

    let { children, ...props }: FormProps = $props();
</script>

<form {...props} method="POST">{@render children()}</form>
