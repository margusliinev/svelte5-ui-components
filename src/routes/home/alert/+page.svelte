<script lang="ts">
    import { Alert } from '$components'
    let variants = ['success', 'warning', 'danger', 'info'] as const
    let descriptions = [
        'Your changes have been saved successfully.',
        'Please note that this action cannot be undone.',
        'Failed to load data. Please try again later.',
        'You have a new notification. Check your inbox.'
    ] as const
</script>

<div class="grid gap-4 lg:grid-cols-2">
    <div class="flex flex-col gap-4">
        <h2 class="font-medium">With Title</h2>
        {#each variants as variant, i}
            <Alert {variant} title={variant}>{descriptions[i]}</Alert>
        {/each}
    </div>
    <div class="flex flex-col gap-4">
        <h2 class="font-medium">Without Title</h2>
        {#each variants as variant, i}
            <Alert {variant}>{descriptions[i]}</Alert>
        {/each}
    </div>
</div>
