<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { Snippet } from 'svelte'
    import { twJoin, twMerge } from 'tailwind-merge'
    import { Icon } from '$components'

    interface AlertProps extends HTMLAttributes<HTMLDivElement> {
        children: Snippet
        variant: 'success' | 'warning' | 'danger' | 'info'
        title?: string
    }

    let { children, variant, title, class: className, ...props } = $props<AlertProps>()

    let alertVariant = {
        success: 'border-success/30 text-success bg-success/10',
        warning: 'border-warning/30 text-warning bg-warning/10',
        danger: 'border-danger/30 text-danger bg-danger/10',
        info: 'border-info/30 text-info bg-info/10'
    }
    let alertCore = 'text-sm w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute'
    let alertStyles = twJoin(alertCore, alertVariant[variant ?? 'danger'])
</script>

<div {...props} role="alert" class={twMerge(alertStyles, className)}>
    {#if variant === 'success'}
        <Icon name="check" size="sm" />
    {/if}
    {#if variant === 'warning'}
        <Icon name="warning" size="sm" />
    {/if}
    {#if variant === 'danger'}
        <Icon name="error" size="sm" />
    {/if}
    {#if variant === 'info'}
        <Icon name="info" size="sm" />
    {/if}
    {#if title}
        <h5 class="mb-1 font-medium capitalize">{title}</h5>
    {/if}
    <p>{@render children()}</p>
</div>
