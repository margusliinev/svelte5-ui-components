<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLSpanElement> {
        children: Snippet;
        variant: 'success' | 'warning' | 'danger' | 'info';
    }

    let { children, variant = 'success', ...rest }: Props = $props();

    let badgeVariants = {
        success: 'bg-success hover:bg-success-hover text-success-foreground',
        warning: 'bg-warning hover:bg-warning-hover text-warning-foreground',
        danger: 'bg-danger hover:bg-danger-hover text-danger-foreground',
        info: 'bg-info hover:bg-info-hover text-info-foreground'
    };
    let badgeCore = 'flex items-center justify-center rounded-full py-2 px-4 text-sm capitalize font-medium transition-colors cursor-default';
    let badgeStyles = `${badgeCore} ${badgeVariants[variant]}`;
</script>

<span {...rest} class={badgeStyles}>{@render children()}</span>
