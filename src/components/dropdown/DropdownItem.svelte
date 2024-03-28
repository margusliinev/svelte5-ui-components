<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { getContext } from 'svelte';

    interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = getContext<DropdownState>('dropdown');

    let { children, ...props }: DropdownItemProps = $props();
</script>

<div {...props} role="menuitem" tabindex={-1} onkeydown={dropdown.handleKeyDown}>{@render children()}</div>
