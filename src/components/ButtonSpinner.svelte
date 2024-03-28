<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    interface ButtonSpinnerProps extends HTMLAttributes<HTMLDivElement> {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { size = 'md', class: className, ...props }: ButtonSpinnerProps = $props();

    let buttonSpinnerSizes = {
        xs: 'h-3 w-3 border-[2px]',
        sm: 'h-4 w-4 border-[2px]',
        md: 'h-5 w-5 border-[3px]',
        lg: 'h-6 w-6 border-[3px]',
        xl: 'h-7 w-7 border-[4px]'
    };

    let buttonSpinnerCore = 'inline-block animate-spin rounded-full border-background border-t-transparent';
    let buttonSpinnerStyles = `${buttonSpinnerCore} ${buttonSpinnerSizes[size]}`;
</script>

<div {...props} class={twMerge(buttonSpinnerStyles, className)} role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
</div>
