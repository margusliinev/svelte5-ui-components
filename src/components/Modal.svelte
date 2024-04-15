<script lang="ts">
    import type { HTMLDialogAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { Button, Icon } from '$components';

    interface Props extends HTMLDialogAttributes {
        children?: Snippet;
        open: boolean;
    }

    let { children, open = $bindable(), ...rest }: Props = $props();

    let dialog = $state<HTMLDialogElement | null>(null);

    $effect(() => {
        if (open) dialog?.showModal();
        else dialog?.close();
    });

    let coreStyles =
        'fixed inset-0 bg-card text-foreground w-screen-90 max-w-xl rounded-md p-6 open:animate-fade-in backdrop:animate-backdrop-fade backdrop:backdrop-brightness-50 outline-none shadow-xl';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<dialog {...rest} bind:this={dialog} class={coreStyles + extraStyles} onclose={() => (open = false)}>
    {@render children?.()}
    <Button size="icon" class="!absolute right-4 top-4 focus:ring-2 focus:ring-foreground" onclick={() => (open = false)}>
        <Icon name="close" />
    </Button>
</dialog>
