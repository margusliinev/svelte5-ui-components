<script lang="ts">
    let { children, data } = $props();
</script>

<h1 class="mb-6 text-xl font-medium capitalize">Components / {`${data.route?.split('/')[2]}`}</h1>
{@render children()}
