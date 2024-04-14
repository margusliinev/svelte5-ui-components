<script lang="ts">
    import { Button, Icon } from '$components';
    let variants = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;
    let sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {#each sizes as size, i}
        <div class="flex flex-col gap-4">
            <h2 class="font-medium">Size: <span class="uppercase">{`${sizes[i]}`}</span></h2>

            {#each variants as variant}
                <Button {variant} {size}>{variant}</Button>
            {/each}

            <Button variant="secondary" {size} disabled>Disabled</Button>
            <Button variant="secondary" {size} isLoading>Disabled</Button>

            {#if size === 'xs'}
                <Button variant="secondary" size="xs"><Icon name="link" size="xs" />With Icon</Button>
            {/if}
            {#if size === 'sm' || size === 'md' || size === 'lg'}
                <Button variant="secondary" size="sm"><Icon name="link" size="sm" />With Icon</Button>
            {/if}
            {#if size === 'xl'}
                <Button variant="secondary" size="xl"><Icon name="link" size="md" />With Icon</Button>
            {/if}

            <Button variant="secondary" {size} class="w-fit"><Icon name="copy" {size} /></Button>
        </div>
    {/each}
</div>
