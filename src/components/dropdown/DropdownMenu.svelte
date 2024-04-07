<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let { children, ...rest }: Props = $props();

    let coreStyles = 'grid absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 w-max overflow-hidden';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

{#if dropdown.open}
    <div {...rest} class={coreStyles + extraStyles} role="menu" transition:fly|local={{ duration: 100 }} onfocusout={dropdown.handleBlur}>
        {@render children()}
    </div>
{/if}
