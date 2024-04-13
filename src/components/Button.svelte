<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLButtonAttributes {
        children?: Snippet;
        variant?: 'plain' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { children, variant = 'plain', size = 'md', ...rest }: Props = $props();

    let buttonVariants = {
        plain: 'bg-transparent text-foreground focus:ring-foreground focus:ring-inset focus:ring-offset-0 font-normal',
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary focus:ring-offset-2 font-medium',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus:ring-secondary focus:ring-offset-2 font-medium',
        success: 'bg-success text-success-foreground hover:bg-success-hover focus:ring-success focus:ring-offset-2 font-medium',
        warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus:ring-warning focus:ring-offset-2 font-medium',
        danger: 'bg-danger text-danger-foreground hover:bg-danger-hover focus:ring-danger focus:ring-offset-2 font-medium'
    };

    let buttonSizes = {
        icon: '',
        xs: 'h-8 px-4 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-11 px-5 text-sm',
        xl: 'h-12 px-6 text-base'
    };

    let coreStyles = `flex justify-center items-center gap-1 capitalize rounded-md transition-colors ring-offset-background focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none ${buttonVariants[variant]} ${buttonSizes[size]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<button {...rest} class={coreStyles + extraStyles}>
    {@render children?.()}
</button>
