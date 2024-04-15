<script lang="ts">
    import { toastStore, removeToast } from '$stores';
    import { Button, Icon } from '$components';
    import { fly } from 'svelte/transition';
</script>

<div class="pointer-events-none fixed inset-0 z-50 flex flex-col items-end justify-start gap-4 pr-4 pt-4" aria-live="assertive">
    {#each $toastStore as toast}
        <div class="pointer-events-auto w-full max-w-sm" transition:fly={{ y: -100 }}>
            <div class="relative w-full rounded-lg border bg-card p-4 text-sm [&>svg]:absolute [&>svg~*]:pl-8 text-{toast.type}-hover">
                <Icon name={toast.type} size="sm" />
                {#if toast.title}
                    <h5 class="text-foreground">{toast.title}</h5>
                {/if}
                <p class="text-sm text-gray-500">
                    {toast.description}
                </p>
                <Button size="icon" class="!absolute right-2 top-2 !text-gray-500" onclick={() => removeToast(toast.id)}>
                    <Icon name="close" size="sm" />
                </Button>
            </div>
        </div>
    {/each}
</div>
