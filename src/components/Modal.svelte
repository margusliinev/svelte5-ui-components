<script lang="ts">
    import type { HTMLDialogAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLDialogAttributes {
        children?: Snippet;
        open: boolean;
    }

    let { children, open, ...rest }: Props = $props();

    let dialog = $state(null as HTMLDialogElement | null);

    $effect(() => {
        if (dialog) {
            dialog.showModal();
        }
    });
</script>

{#if open}
    <dialog {...rest} bind:this={dialog}>
        {@render children?.()}
    </dialog>
{/if}

<style>
    dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        animation: fade-out 0.2s ease-in;
    }
    dialog[open] {
        opacity: 100;
        animation: fade-in 0.3s ease-out;
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
</style>
