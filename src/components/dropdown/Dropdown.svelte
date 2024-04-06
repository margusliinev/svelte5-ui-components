<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { CreateDropdownState } from './DropdownState.svelte';
    import { setContext } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    const dropdown = new CreateDropdownState({ open: false });
    setContext<DropdownState>('dropdown', dropdown);

    let { children, ...rest }: Props = $props();

    let dropdownStyles = 'relative';
</script>

<div {...rest} class={`${dropdownStyles} ${rest.class}`}>{@render children()}</div>
