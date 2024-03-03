<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { Snippet } from 'svelte'
    import { ButtonSpinner } from '$components'
    import { twMerge } from 'tailwind-merge'

    interface ButtonProps extends HTMLButtonAttributes {
        children: Snippet
        variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
        style?: 'solid' | 'soft' | 'outline' | 'ghost' | 'plain'
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        isLoading?: boolean
    }

    let { children, variant, style, size, isLoading, class: className, ...props } = $props<ButtonProps>()

    let buttonVariants = {
        solid: {
            default: 'bg-foreground text-background hover:bg-foreground-hover focus-visible:ring-foreground',
            primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary',
            success: 'bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success',
            warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus-visible:ring-warning',
            danger: 'bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:ring-danger'
        },
        soft: {
            default: 'bg-foreground/70 text-background hover:bg-foreground/90 focus-visible:ring-foreground/70',
            primary: 'bg-primary/70 text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/70',
            secondary: 'bg-secondary/70 text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary/70',
            success: 'bg-success/70 text-success-foreground hover:bg-success/90 focus-visible:ring-success/70',
            warning: 'bg-warning/70 text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/70',
            danger: 'bg-danger/70 text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/70'
        },
        outline: {
            default: 'bg-transparent ring-1 ring-inset ring-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:ring-offset-0',
            primary: 'bg-transparent ring-1 ring-inset ring-primary text-primary hover:bg-primary hover:text-background focus-visible:ring-offset-0',
            secondary: 'bg-transparent ring-1 ring-inset ring-secondary text-secondary hover:bg-secondary hover:text-background focus-visible:ring-offset-0',
            success: 'bg-transparent ring-1 ring-inset ring-success text-success hover:bg-success hover:text-background focus-visible:ring-offset-0',
            warning: 'bg-transparent ring-1 ring-inset ring-warning text-warning hover:bg-warning hover:text-background focus-visible:ring-offset-0',
            danger: 'bg-transparent ring-1 ring-inset ring-danger text-danger hover:bg-danger hover:text-background focus-visible:ring-offset-0'
        },
        ghost: {
            default: 'bg-transparent text-foreground hover:bg-foreground/20 focus-visible:ring-foreground focus-visible:ring-inset focus-visible:ring-offset-0',
            primary: 'bg-transparent text-primary hover:bg-primary/20 focus-visible:ring-primary focus-visible:ring-inset focus-visible:ring-offset-0',
            secondary: 'bg-transparent text-secondary hover:bg-secondary/20 focus-visible:ring-secondary focus-visible:ring-inset focus-visible:ring-offset-0',
            success: 'bg-transparent text-success hover:bg-success/20 focus-visible:ring-success focus-visible:ring-inset focus-visible:ring-offset-0',
            warning: 'bg-transparent text-warning hover:bg-warning/20 focus-visible:ring-warning focus-visible:ring-inset focus-visible:ring-offset-0',
            danger: 'bg-transparent text-danger hover:bg-danger/20 focus-visible:ring-danger focus-visible:ring-inset focus-visible:ring-offset-0'
        },
        plain: {
            default: 'bg-transparent text-foreground hover:text-foreground-hover focus-visible:ring-foreground focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
            primary: 'bg-transparent text-primary hover:text-primary-hover focus-visible:ring-primary focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
            secondary: 'bg-transparent text-secondary hover:text-secondary-hover focus-visible:ring-secondary focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
            success: 'bg-transparent text-success hover:text-success-hover focus-visible:ring-success focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
            warning: 'bg-transparent text-warning hover:text-warning-hover focus-visible:ring-warning focus-visible:ring-inset focus-visible:ring-offset-0 font-normal',
            danger: 'bg-transparent text-danger hover:text-danger-hover focus-visible:ring-danger focus-visible:ring-inset focus-visible:ring-offset-0 font-normal'
        }
    }

    let buttonSizes = {
        icon: '',
        xs: 'h-8 px-4 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-11 px-5 text-sm',
        xl: 'h-12 px-6 text-base'
    }

    let buttonCore =
        'inline-flex items-center justify-center gap-1 rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium group'
    let buttonVariant = buttonVariants[style ?? 'solid']
    let buttonSize = buttonSizes[size ?? 'md']
    let buttonStyles = twMerge(buttonCore, buttonVariant[variant ?? 'default'], buttonSize)
</script>

<button {...props} class={twMerge(buttonStyles, className)}>
    {#if isLoading}
        {#if size === 'xs' || size === 'sm'}
            {#if style === 'outline'}
                <ButtonSpinner size="sm" class="group-hover:text-background" />
            {:else if style === 'ghost' || style === 'plain'}
                <ButtonSpinner size="sm" class="text-foreground" />
            {:else}
                <ButtonSpinner size="sm" class="text-background" />
            {/if}
        {:else if style === 'outline'}
            <ButtonSpinner size="md" class="group-hover:text-background" />
        {:else if style === 'ghost' || style === 'plain'}
            <ButtonSpinner size="md" class="text-foreground" />
        {:else}
            <ButtonSpinner size="md" class="text-background" />
        {/if}
    {:else}
        {@render children()}
    {/if}
</button>
