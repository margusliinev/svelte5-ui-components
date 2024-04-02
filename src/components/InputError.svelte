<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface InputErrorProps extends HTMLAttributes<HTMLSpanElement> {
        children: Snippet;
        id: string;
    }

    let { children, id, ...props }: InputErrorProps = $props();

    let inputErrorStyles = 'block text-sm text-input-invalid';
</script>

<span {...props} {id} class={twMerge(inputErrorStyles, props.class)}>{@render children()}</span>
