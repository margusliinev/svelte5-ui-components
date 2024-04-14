<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { Spinner } from '$components';

    interface Props extends HTMLButtonAttributes {
        children?: Snippet;
        isLoading?: boolean;
        variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { children, isLoading = false, variant = 'default', size = 'md', ...rest }: Props = $props();

    let buttonVariants = {
        default: 'focus-visible:ring-foreground',
        primary: 'bg-primary text-primary-foreground ring-offset-2 font-medium focus-visible:ring-primary hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground ring-offset-2 font-medium focus-visible:ring-secondary hover:bg-secondary-hover',
        success: 'bg-success text-success-foreground ring-offset-2 font-medium focus-visible:ring-success hover:bg-success-hover',
        warning: 'bg-warning text-warning-foreground ring-offset-2 font-medium focus-visible:ring-warning hover:bg-warning-hover',
        danger: 'bg-danger text-danger-foreground ring-offset-2 font-medium focus-visible:ring-danger hover:bg-danger-hover'
    };

    let buttonSizes = {
        icon: '',
        xs: 'h-8 px-4 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-11 px-5 text-sm',
        xl: 'h-12 px-6 text-base'
    };

    let coreStyles = `relative inline-flex justify-center items-center gap-1 capitalize rounded-md transition-colors ring-offset-background outline-none focus-visible:ring-2 disabled:opacity-70 disabled:pointer-events-none ${buttonVariants[variant]} ${buttonSizes[size]} ${isLoading ? '!text-transparent' : ''}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<button {...rest} class={coreStyles + extraStyles}>
    {#if isLoading}
        <Spinner {size} />
    {/if}
    {@render children?.()}
</button>
