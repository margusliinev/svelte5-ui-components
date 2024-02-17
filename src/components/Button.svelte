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
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary font-medium dark:font-semibold',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary font-medium dark:font-semibold',
        success: 'bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success font-medium dark:font-semibold',
        warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus-visible:ring-warning font-medium dark:font-semibold',
        danger: 'bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:ring-danger font-medium dark:font-semibold',
        none: 'focus-visible:ring-foreground font-medium dark:font-normal'
    }

    let buttonSizes = {
        none: 'px-0 py-0',
        xs: 'px-3 py-1.5',
        sm: 'px-4 py-2',
        md: 'px-5 py-2.5',
        lg: 'px-6 py-3',
        xl: 'px-7 py-3.5'
    }

    let buttonCore =
        'inline-flex items-center justify-center gap-2 text-sm whitespace-nowrap rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-80 disabled:pointer-events-none'
    let buttonVariant = buttonVariants[variant ?? 'primary']
    let buttonSize = buttonSizes[size ?? 'md']

    let buttonStyles = twJoin(buttonCore, buttonVariant, buttonSize)
</script>

<button {...props} class={twMerge(buttonStyles, className)}>{@render children()}</button>
