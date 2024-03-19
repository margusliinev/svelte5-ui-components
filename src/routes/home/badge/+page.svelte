<script lang="ts">
    import { Badge } from '$components';
    let variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;
</script>

<div class="flex flex-wrap items-center gap-4">
    {#each variants as variant}
        <Badge {variant}>{variant}</Badge>
    {/each}
</div>
