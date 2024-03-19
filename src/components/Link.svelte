<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface LinkProps extends HTMLAnchorAttributes {
        children: Snippet;
        variant?: 'default' | 'primary' | 'secondary';
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { children, variant, class: className, ...props }: LinkProps = $props();

    let linkVariants = {
        default: 'focus-visible:ring-foreground focus-visible:ring-offset-0 focus-visible:ring-inset font-normal',
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary'
    };

    let linkSizes = {
        icon: '',
        xs: 'px-4 py-2 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-5 py-2.5 text-sm',
        xl: 'px-6 py-3 text-base'
    };

    let linkCore =
        'inline-flex items-center justify-center gap-1 capitalize rounded-md transition-colors font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group';
    let linkVarient = linkVariants[variant ?? 'default'];
    let linkSize = linkSizes[props.size ?? 'md'];
    let linkStyles = twMerge(linkCore, linkVarient, linkSize);
</script>

<a {...props} class={twMerge(linkStyles, className)}>{@render children()}</a>
