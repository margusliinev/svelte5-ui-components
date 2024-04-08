<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAnchorAttributes {
        children?: Snippet;
        variant?: 'plain' | 'primary' | 'secondary';
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { children, variant = 'plain', size = 'md', ...rest }: Props = $props();

    let linkVariants = {
        plain: 'bg-transparent text-foreground focus-visible:ring-foreground focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary focus-visible:ring-offset-2 font-medium',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary focus-visible:ring-offset-2 font-medium'
    };

    let linkSizes = {
        icon: '',
        xs: 'h-8 px-4 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-11 px-5 text-sm',
        xl: 'h-12 px-6 text-base'
    };

    let coreStyles = `flex justify-center items-center gap-1 capitalize rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ${linkVariants[variant]} ${linkSizes[size]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<a {...rest} class={coreStyles + extraStyles}>{@render children?.()}</a>
