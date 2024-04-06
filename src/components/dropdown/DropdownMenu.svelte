<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    import { fly } from 'svelte/transition';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let dropdownMenuStyles = 'grid absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 w-max overflow-hidden';

    let { children, ...rest }: Props = $props();
</script>

{#if dropdown.open}
    <div {...rest} class={twMerge(dropdownMenuStyles, rest.class)} role="menu" transition:fly|local={{ duration: 100 }} onfocusout={dropdown.handleBlur}>
        {@render children()}
    </div>
{/if}
