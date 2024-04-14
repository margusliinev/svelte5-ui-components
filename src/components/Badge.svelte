<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLSpanElement> {
        children?: Snippet;
        variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    }

    let { children, variant = 'primary', ...rest }: Props = $props();

    let badgeVariants = {
        primary: 'bg-primary hover:bg-primary-hover text-primary-foreground',
        secondary: 'bg-secondary hover:bg-secondary-hover text-secondary-foreground',
        success: 'bg-success hover:bg-success-hover text-success-foreground',
        warning: 'bg-warning hover:bg-warning-hover text-warning-foreground',
        danger: 'bg-danger hover:bg-danger-hover text-danger-foreground',
        info: 'bg-info hover:bg-info-hover text-info-foreground'
    };
    let coreStyles = `inline-flex items-center justify-center rounded-full py-1.5 px-3 text-sm capitalize font-medium transition-colors cursor-default ${badgeVariants[variant]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<span {...rest} class={coreStyles + extraStyles}>{@render children?.()}</span>
