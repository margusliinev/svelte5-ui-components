<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }

    let { size = 'md', ...rest }: Props = $props();

    let buttonSpinnerSizes = {
        icon: 'h-4 w-4 border-[2px]',
        xs: 'h-4 w-4 border-[2px]',
        sm: 'h-5 w-5 border-[3px]',
        md: 'h-5 w-5 border-[3px]',
        lg: 'h-5 w-5 border-[3px]',
        xl: 'h-6 w-6 border-[4px]'
    };

    let coreStyles = `absolute animate-spin rounded-full border-background border-t-transparent ${buttonSpinnerSizes[size]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles} role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
</div>
