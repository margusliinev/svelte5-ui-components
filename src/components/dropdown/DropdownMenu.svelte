<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { getContext } from 'svelte'
    import { twMerge } from 'tailwind-merge'
    import { fly } from 'svelte/transition'

    interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let dropdownMenuStyles = 'grid absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 hover:overflow-hidden w-max'

    let { children, class: className, ...props } = $props<DropdownMenuProps>()
</script>

{#if dropdown.open}
    <div {...props} class={twMerge(dropdownMenuStyles, className)} role="menu" transition:fly|local={{ duration: 100 }} onfocusout={dropdown.handleBlur}>
        {@render children()}
    </div>
{/if}
