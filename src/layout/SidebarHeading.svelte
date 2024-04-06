<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<h4 class="mb-4 text-xs font-medium uppercase text-secondary">{@render children()}</h4>
