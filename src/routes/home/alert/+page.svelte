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

<div class="grid gap-4">
    {#each variants as variant, i}
        <Alert {variant} title={variant !== 'danger' ? variant : 'error'} description={`${descriptions[i]}`} />
    {/each}
</div>
