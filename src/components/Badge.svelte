<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
        children: Snippet;
        variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    }

    let { children, variant = 'primary', class: className, ...props }: BadgeProps = $props();

    let badgeVariants = {
        primary: 'bg-primary hover:bg-primary-hover text-primary-foreground',
        secondary: 'bg-secondary hover:bg-secondary-hover text-secondary-foreground',
        success: 'bg-success hover:bg-success-hover text-success-foreground',
        warning: 'bg-warning hover:bg-warning-hover text-warning-foreground',
        danger: 'bg-danger hover:bg-danger-hover text-danger-foreground'
    };
    let badgeCore = 'inline-flex items-center rounded-full py-1.5 px-3 text-sm capitalize font-medium cursor-default transition-colors';
    let badgeStyles = `${badgeCore} ${badgeVariants[variant]}`;
</script>

<span {...props} class={twMerge(badgeStyles, className)}>{@render children()}</span>
