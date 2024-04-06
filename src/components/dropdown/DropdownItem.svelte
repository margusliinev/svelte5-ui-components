<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let { children, ...rest }: Props = $props();
</script>

<div {...rest} role="menuitem" tabindex={-1} onkeydown={dropdown.handleKeyDown}>{@render children()}</div>
