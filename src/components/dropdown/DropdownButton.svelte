<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { Button, Icon } from '$components'
    import { twMerge } from 'tailwind-merge'
    import { getContext } from 'svelte'

    interface DropdownButtonProps extends HTMLButtonAttributes {
        children: Snippet
        icon?: boolean
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let { children, icon, class: className, ...props } = $props<DropdownButtonProps>()

    let dropdownButtonStyles =
        'focus-visible:ring-foreground focus-visible:ring-offset-0 transition-none inline-flex items-center justify-center gap-1 capitalize rounded-md focus-visible:outline-none focus-visible:ring-2 h-10 px-5 text-sm ring-1 ring-border ring-inset bg-background font-medium'
</script>

<button
    {...props}
    class={twMerge(dropdownButtonStyles, className)}
    aria-haspopup="menu"
    aria-expanded={dropdown.open}
    onclick={dropdown.handleClick}
    onkeydown={dropdown.handleKeyDown}
    onblur={dropdown.handleBlur}
>
    {@render children()}
    {#if icon}
        {#if dropdown.open}
            <Icon name="chevron-up" size="xs" />
        {:else}
            <Icon name="chevron-down" size="xs" />
        {/if}
    {/if}
</button>
