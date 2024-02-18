<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { Snippet } from 'svelte'
    import { twMerge } from 'tailwind-merge'

    interface ButtonProps extends HTMLButtonAttributes {
        children: Snippet
        color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
        variant?: 'solid' | 'soft' | 'outline' | 'ghost'
        size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    let { children, color, variant, size, class: className, ...props } = $props<ButtonProps>()

    let buttonVariants = {
        solid: {
            primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary',
            success: 'bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success',
            warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus-visible:ring-warning',
            danger: 'bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:ring-danger'
        },
        soft: {
            primary: 'bg-primary/70 text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/70',
            secondary: 'bg-secondary/70 text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary/70',
            success: 'bg-success/70 text-success-foreground hover:bg-success/90 focus-visible:ring-success/70',
            warning: 'bg-warning/70 text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/70',
            danger: 'bg-danger/70 text-danger-foreground hover:bg-danger/9 focus-visible:ring-danger/70'
        },
        outline: {
            primary: 'bg-transparent ring-1 ring-inset ring-primary text-primary hover:bg-primary hover:text-background focus-visible:ring-offset-0',
            secondary: 'bg-transparent ring-1 ring-inset ring-secondary text-secondary hover:bg-secondary hover:text-background focus-visible:ring-offset-0',
            success: 'bg-transparent ring-1 ring-inset ring-success text-success hover:bg-success hover:text-background focus-visible:ring-offset-0',
            warning: 'bg-transparent ring-1 ring-inset ring-warning text-warning hover:bg-warning hover:text-background focus-visible:ring-offset-0',
            danger: 'bg-transparent ring-1 ring-inset ring-danger text-danger hover:bg-danger hover:text-background focus-visible:ring-offset-0'
        },
        ghost: {
            primary: 'bg-transparent text-primary hover:bg-primary/20 focus-visible:ring-primary focus-visible:ring-inset focus-visible:ring-offset-0',
            secondary: 'bg-transparent text-secondary hover:bg-secondary/20 focus-visible:ring-secondary focus-visible:ring-inset focus-visible:ring-offset-0',
            success: 'bg-transparent text-success hover:bg-success/20 focus-visible:ring-success focus-visible:ring-inset focus-visible:ring-offset-0',
            warning: 'bg-transparent text-warning hover:bg-warning/20 focus-visible:ring-warning focus-visible:ring-inset focus-visible:ring-offset-0',
            danger: 'bg-transparent text-danger hover:bg-danger/20 focus-visible:ring-danger focus-visible:ring-inset focus-visible:ring-offset-0'
        }
    }

    let buttonSizes = {
        none: '',
        xs: 'px-3 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-7 py-3.5 text-xl'
    }

    let buttonCore =
        'inline-flex items-center justify-center gap-1 capitalize whitespace-nowrap rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:font-medium'
    let buttonVariant = buttonVariants[variant ?? 'solid']
    let buttonSize = buttonSizes[size ?? 'md']

    let buttonStyles = twMerge(buttonCore, buttonVariant[color ?? 'primary'], buttonSize)
</script>

<button {...props} class={twMerge(buttonStyles, className)}>{@render children()}</button>
