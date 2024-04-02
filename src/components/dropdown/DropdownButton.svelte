<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    import { Icon } from '$components';

    interface DropdownButtonProps extends HTMLButtonAttributes {
        children: Snippet;
        chevron?: boolean;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let { children, chevron = false, ...props }: DropdownButtonProps = $props();

    let dropdownButtonStyles =
        'transition-none flex justify-center items-center gap-1 capitalize rounded-md h-10 px-5 text-sm ring-1 ring-border ring-inset bg-background font-medium focus-visible:ring-foreground focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2';
</script>

<button
    {...props}
    class={twMerge(dropdownButtonStyles, props.class)}
    aria-haspopup="menu"
    aria-expanded={dropdown.open}
    onclick={dropdown.handleClick}
    onkeydown={dropdown.handleKeyDown}
    onblur={dropdown.handleBlur}
>
    {@render children()}
    {#if chevron}
        {#if dropdown.open}
            <Icon name="chevron-up" size="xs" />
        {:else}
            <Icon name="chevron-down" size="xs" />
        {/if}
    {/if}
</button>
