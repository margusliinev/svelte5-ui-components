<script lang="ts">
    import type { Snippet } from 'svelte';

    interface SidebarHeadingProps {
        children: Snippet;
    }

    let { children }: SidebarHeadingProps = $props();
</script>

<h4 class="mb-4 text-xs font-medium uppercase text-secondary">{@render children()}</h4>
