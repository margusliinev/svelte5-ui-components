<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface FieldErrorProps extends HTMLAttributes<HTMLSpanElement> {
        children: Snippet;
        id: string;
    }

    let { children, id, ...props }: FieldErrorProps = $props();

    let fieldErrorStyles = 'block text-sm text-input-invalid';
</script>

<span {...props} {id} class={twMerge(fieldErrorStyles, props.class)}>{@render children()}</span>
