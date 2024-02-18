<script lang="ts">
    import { Button, Icon } from '$components'
    let colors = ['primary', 'secondary', 'success', 'warning', 'danger'] as const
    let variants = ['solid', 'soft', 'outline', 'ghost'] as const
    let sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<div class="grid min-h-full gap-4 py-6 lg:grid-cols-5">
    {#each sizes as size, i}
        <div class="flex flex-col gap-4">
            <h2 class="font-medium">Size: <span class="uppercase">{`${sizes[i]}`}</span></h2>

            {#each colors as color}
                {#each variants as variant}
                    <Button {color} {variant} {size}>{color} {variant}</Button>
                {/each}
            {/each}
            <Button color="secondary" {size} disabled>disabled</Button>
            <Button color="secondary" {size}><Icon name="external-link" {size} />With Icon</Button>
            <Button color="secondary" {size} class="w-fit"><Icon name="copy" {size} /></Button>
        </div>
    {/each}
</div>
