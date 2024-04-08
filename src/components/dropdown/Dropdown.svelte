<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { DropdownState } from './DropdownState.svelte';
    import type { Snippet } from 'svelte';
    import { CreateDropdownState } from './DropdownState.svelte';
    import { setContext } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
    }

    const dropdown = new CreateDropdownState({ open: false });
    setContext<DropdownState>('dropdown', dropdown);

    let { children, ...rest }: Props = $props();

    let coreStyles = 'relative';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>{@render children?.()}</div>
