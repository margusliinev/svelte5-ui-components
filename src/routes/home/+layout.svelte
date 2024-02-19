<script lang="ts">
    let { data } = $props()
</script>

<h1 class="mb-6 text-lg font-medium capitalize">
    Components / {`${data?.route?.split('/')[2]}`}
</h1>
<slot />
