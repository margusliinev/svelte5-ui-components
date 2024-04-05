<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
        children: Snippet;
        variant: 'success' | 'warning' | 'danger' | 'info';
    }

    let { children, variant = 'success', ...props }: BadgeProps = $props();

    let badgeVariants = {
        success: 'bg-success hover:bg-success-hover text-success-foreground',
        warning: 'bg-warning hover:bg-warning-hover text-warning-foreground',
        danger: 'bg-danger hover:bg-danger-hover text-danger-foreground',
        info: 'bg-info hover:bg-info-hover text-info-foreground'
    };
    let badgeCore = 'inline-flex items-center justify-center rounded-full py-1.5 px-3 text-sm capitalize font-medium cursor-default transition-colors min-w-16';
    let badgeStyles = `${badgeCore} ${badgeVariants[variant]}`;
</script>

<span {...props} class={badgeStyles}>{@render children()}</span>
