<script lang="ts">
    import { toastStore, removeToast } from '$stores';
    import { Button, Icon } from '$components';
    import { fly } from 'svelte/transition';

    let toastVariants = {
        success: 'border-success/30 text-success-hover bg-emerald-50',
        warning: 'border-warning/30 text-warning-hover bg-amber-50',
        danger: 'border-danger/30 text-danger-hover bg-red-50',
        info: 'border-info/30 text-info-hover bg-sky-50'
    };
</script>

<div class="pointer-events-none fixed inset-0 z-50 flex flex-col items-end justify-start gap-4 p-4" aria-live="assertive">
    {#each $toastStore as toast}
        <div class="pointer-events-auto w-full max-w-sm" transition:fly={{ y: -100 }}>
            <div class="relative w-full rounded-md border p-4 text-sm [&>svg]:absolute [&>svg~p]:pl-7 {toastVariants[toast.type]}">
                <Icon name={toast.type} size="sm" />
                {#if toast.title}
                    <p class="mb-1 font-medium capitalize">{toast.title}</p>
                {/if}
                <p class="pr-4">{toast.message}</p>
                <Button size="icon" class="!absolute right-2 top-2" onclick={() => removeToast(toast.id)}>
                    <Icon name="close" size="sm" />
                </Button>
            </div>
        </div>
    {/each}
</div>
