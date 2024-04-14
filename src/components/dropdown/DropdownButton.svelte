<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';
    import { Icon } from '$components';

    interface Props extends HTMLButtonAttributes {
        children?: Snippet;
        chevron?: boolean;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let { children, chevron = false, ...rest }: Props = $props();

    let coreStyles =
        'flex justify-center items-center gap-1 capitalize rounded-md h-10 px-5 text-sm ring-1 ring-border ring-inset bg-card font-medium focus:ring-foreground focus:outline-none focus:ring-2';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<button {...rest} class={coreStyles + extraStyles} aria-haspopup="menu" aria-expanded={dropdown.open} onclick={dropdown.handleClick} onkeydown={dropdown.handleKeyDown} onblur={dropdown.handleBlur}>
    {@render children?.()}
    {#if chevron}
        {#if dropdown.open}
            <Icon name="chevron-up" size="xs" />
        {:else}
            <Icon name="chevron-down" size="xs" />
        {/if}
    {/if}
</button>
