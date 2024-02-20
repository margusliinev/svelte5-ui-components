<script lang="ts">
    import { Link } from '$components'
    let colors = ['default', 'primary', 'secondary'] as const
    let sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {#each sizes as size, i}
        <div class="flex flex-col gap-4">
            <h2 class="font-medium">Size: <span class="uppercase">{`${sizes[i]}`}</span></h2>
            {#each colors as color}
                <Link href="#" {color} {size}>{color} link</Link>
            {/each}
        </div>
    {/each}
</div>
