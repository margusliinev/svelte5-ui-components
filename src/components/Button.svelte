<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { Snippet } from 'svelte'
    import { twJoin, twMerge } from 'tailwind-merge'

    interface ButtonProps extends HTMLButtonAttributes {
        children: Snippet
        variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'none'
        size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    let { children, variant, size, class: className, ...props } = $props<ButtonProps>()

    let buttonVariants = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary dark:font-medium',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary dark:font-medium',
        success: 'bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success dark:font-medium',
        warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus-visible:ring-warning dark:font-medium',
        danger: 'bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:ring-danger dark:font-medium',
        none: 'focus-visible:ring-foreground'
    }

    let buttonSizes = {
        none: '',
        xs: 'px-4 py-2 text-xs',
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-7 py-3.5 text-lg',
        xl: 'px-8 py-4 text-xl'
    }

    let buttonCore =
        'inline-flex items-center justify-center gap-2 capitalize whitespace-nowrap rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    let buttonVariant = buttonVariants[variant ?? 'primary']
    let buttonSize = buttonSizes[size ?? 'md']

    let buttonStyles = twJoin(buttonCore, buttonVariant, buttonSize)
</script>

<button {...props} class={twMerge(buttonStyles, className)}>{@render children()}</button>
