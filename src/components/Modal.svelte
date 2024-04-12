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

    let coreStyles = 'bg-card text-foreground w-full max-w-xl rounded-lg p-6 fixed inset-0 focus:outline-none';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<dialog {...rest} bind:this={dialog} class={coreStyles + extraStyles} onclose={() => (open = false)}>
    <Button variant="plain" size="icon" class="absolute right-4 top-4" onclick={() => (open = false)}>
        <Icon name="close" />
    </Button>
    {@render children?.()}
</dialog>

<style>
    dialog {
        animation: fade-out 0.2s ease-in;
    }

    dialog[open] {
        opacity: 100;
        animation: fade-in 0.3s ease-out;
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }

    dialog[open]::backdrop {
        animation: backdrop-fade-in 0.2s ease-out;
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
            display: none;
        }

        100% {
            opacity: 1;
            display: block;
        }
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
            display: block;
        }

        100% {
            opacity: 0;
            transform: scale(0.95);
            display: none;
        }
    }

    @keyframes backdrop-fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
