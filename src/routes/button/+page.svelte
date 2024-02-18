<script lang="ts">
    import { Button, Icon } from '$components'
    let variants = ['primary', 'secondary', 'success', 'warning', 'danger'] as const
    let sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<div class="grid min-h-full gap-4 py-6 lg:grid-cols-5">
    {#each sizes as size, i}
        <div class="flex flex-col gap-8">
            <h2 class="font-medium">Size: <span class="uppercase">{`${sizes[i]}`}</span></h2>

            {#each variants as variant}
                <Button {variant} {size}>{variant}</Button>
            {/each}
            <Button variant="secondary" {size} disabled>disabled</Button>
            <Button variant="secondary" {size}><Icon name="external-link" {size} />With Icon</Button>
            <Button variant="secondary" {size} class="w-fit"><Icon name="copy" {size} /></Button>
        </div>
    {/each}
</div>
