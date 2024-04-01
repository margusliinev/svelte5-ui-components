<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface FormProps extends HTMLFormAttributes {
        children: Snippet;
    }

    let { children, class: className, ...props }: FormProps = $props();

    let formCore = 'grid';
</script>

<form {...props} method="POST" class={twMerge(formCore, className)}>{@render children()}</form>
