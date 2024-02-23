<script lang="ts">
    import { Button, Icon } from '$components'
    let variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const
    let styles = ['solid', 'soft', 'outline', 'ghost'] as const
    let sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {#each sizes as size, i}
        <div class="flex flex-col gap-4">
            <h2 class="font-medium">Size: <span class="uppercase">{`${sizes[i]}`}</span></h2>

            {#each variants as variant}
                {#each styles as style}
                    <Button {variant} {style} {size}>{variant} {style}</Button>
                {/each}
            {/each}

            <Button color="secondary" {size} disabled>disabled</Button>
            <Button color="secondary" {size} isLoading>Loading</Button>

            {#if size === 'xs'}
                <Button color="secondary" size="xs"><Icon name="external-link" size="xs" />With Icon</Button>
            {/if}
            {#if size === 'sm' || size === 'md' || size === 'lg'}
                <Button color="secondary" size="sm"><Icon name="external-link" size="sm" />With Icon</Button>
            {/if}
            {#if size === 'xl'}
                <Button color="secondary" size="xl"><Icon name="external-link" size="md" />With Icon</Button>
            {/if}

            <Button color="secondary" {size} class="w-fit"><Icon name="copy" {size} /></Button>
        </div>
    {/each}
</div>
