<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import { twJoin, twMerge } from 'tailwind-merge'

    interface ButtonSpinnerProps extends HTMLAttributes<HTMLDivElement> {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    let { size, class: className, ...props } = $props<ButtonSpinnerProps>()

    let buttonSpinnerSizes = {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-7 w-7'
    }

    let buttonSpinnerCore = 'inline-block animate-spin rounded-full border-[3px] border-current border-t-transparent'
    let buttonSpinnerSize = buttonSpinnerSizes[size ?? 'md']
    let buttonSpinnerStyles = twJoin(buttonSpinnerCore, buttonSpinnerSize)
</script>

<div {...props} class={twMerge(buttonSpinnerStyles, className)} role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
</div>
