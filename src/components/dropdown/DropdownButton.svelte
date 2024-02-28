<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { Button, Icon } from '$components'
    import { getContext } from 'svelte'

    interface DropdownButtonProps extends HTMLButtonAttributes {
        children: Snippet
        icon?: boolean
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let { children, icon, ...props } = $props<DropdownButtonProps>()
</script>

<Button {...props} style="plain" aria-haspopup="menu" aria-expanded={dropdown.open} onclick={dropdown.handleClick} onkeydown={dropdown.handleKeyDown} onblur={dropdown.handleOutsideClick}>
    {@render children()}
    {#if icon}
        {#if dropdown.open}
            <Icon name="chevron-up" size="xs" />
        {:else}
            <Icon name="chevron-down" size="xs" />
        {/if}
    {/if}
</Button>
