<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { CreateDropdownState } from './DropdownState.svelte';
    import { setContext } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = new CreateDropdownState({ open: false });
    setContext<DropdownState>('dropdown', dropdown);

    let { children, ...props }: DropdownProps = $props();

    let dropdownStyles = 'relative';
</script>

<div {...props} class={twMerge(dropdownStyles, props.class)}>{@render children()}</div>
