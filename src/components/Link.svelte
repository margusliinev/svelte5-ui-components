<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAnchorAttributes {
        children?: Snippet;
        variant?: 'default' | 'primary' | 'secondary';
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { children, variant = 'default', size = 'md', ...rest }: Props = $props();

    let linkVariants = {
        default: 'focus-visible:ring-foreground',
        primary: 'bg-primary text-primary-foreground ring-offset-2 font-medium focus-visible:ring-primary hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground ring-offset-2 font-medium focus-visible:ring-secondary hover:bg-secondary-hover'
    };

    let linkSizes = {
        icon: '',
        xs: 'h-8 px-4 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-11 px-5 text-sm',
        xl: 'h-12 px-6 text-base'
    };

    let coreStyles = `relative inline-flex justify-center items-center gap-1 capitalize rounded-md transition-colors ring-offset-background outline-none focus-visible:ring-2 ${linkVariants[variant]} ${linkSizes[size]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<a {...rest} class={coreStyles + extraStyles}>{@render children?.()}</a>
