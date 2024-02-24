<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { Snippet } from 'svelte'
    import { twMerge } from 'tailwind-merge'

    interface CardProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet
    }

    let { children, class: className, ...props } = $props<CardProps>()

    let cardStyles = 'h-full w-full rounded-md border border-border bg-card p-6 shadow-sm'
</script>

<div {...props} class={twMerge(cardStyles, className)}>{@render children()}</div>
