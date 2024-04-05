<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { Icon } from '$components';

    interface AlertProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
        variant: 'success' | 'warning' | 'danger' | 'info';
        title?: string;
    }

    let { children, variant = 'success', title = undefined, ...props }: AlertProps = $props();

    let alertVariants = {
        success: 'border-success/30 text-success bg-success/10',
        warning: 'border-warning/30 text-warning bg-warning/10',
        danger: 'border-danger/30 text-danger bg-danger/10',
        info: 'border-info/30 text-info bg-info/10'
    };
    let alertCore = 'text-sm w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute';
    let alertStyles = `${alertCore} ${alertVariants[variant]}`;
</script>

<div {...props} role="alert" class={alertStyles}>
    {#if variant === 'success'}
        <Icon name="check" size="sm" />
    {:else if variant === 'warning'}
        <Icon name="warning" size="sm" />
    {:else if variant === 'danger'}
        <Icon name="error" size="sm" />
    {:else if variant === 'info'}
        <Icon name="info" size="sm" />
    {/if}
    {#if title}
        <h5 class="mb-1 font-medium capitalize">{title}</h5>
    {/if}
    <p>{@render children()}</p>
</div>
