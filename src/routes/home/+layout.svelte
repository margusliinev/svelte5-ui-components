<script lang="ts">
    let { data } = $props()
</script>

<main class="h-full w-full rounded-md border border-border bg-card p-6 shadow-sm">
    <h1 class="mb-6 text-xl font-medium capitalize">
        Components / {`${data.route?.split('/')[2]}`}
    </h1>
    <slot />
</main>
