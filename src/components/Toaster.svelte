<script lang="ts">
    import { toastStore, removeToast } from '$stores';
    import { Button, Icon } from '$components';
    import { fly } from 'svelte/transition';
</script>

<div class="pointer-events-none fixed inset-0 z-50 flex flex-col items-end justify-start gap-4 p-4" aria-live="assertive">
    {#each $toastStore as toast}
        <div class="pointer-events-auto w-full max-w-sm" transition:fly={{ y: -100 }}>
            <div class="relative rounded-lg border border-border bg-card p-4 text-sm [&>svg]:absolute [&>svg~p]:pl-7">
                <Icon name={toast.type} size="sm" class={`text-${toast.type}-hover`} />
                {#if toast.title}
                    <p class="mb-1 capitalize">{toast.title}</p>
                {/if}
                <p class="pr-4 text-foreground/70">{toast.message}</p>
                <Button size="icon" class="!absolute right-2 {toast.title ? 'top-2' : 'top-4'} focus:ring-2 focus:ring-foreground/50" onclick={() => removeToast(toast.id)}>
                    <Icon name="close" size="sm" class="text-foreground/70" />
                </Button>
            </div>
        </div>
    {/each}
</div>
