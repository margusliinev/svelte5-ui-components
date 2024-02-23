<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import { twJoin, twMerge } from 'tailwind-merge'
    import { Icon } from '$components'

    interface AlertProps extends HTMLAttributes<HTMLDivElement> {
        variant: 'success' | 'warning' | 'danger' | 'info'
        title: string
        description: string
    }

    let { variant, title, description, class: className, ...props } = $props<AlertProps>()

    let alertVariant = {
        success: 'border-success/30 text-success bg-success/10',
        warning: 'border-warning/30 text-warning bg-warning/10',
        danger: 'border-danger/30 text-danger bg-danger/10',
        info: 'border-info/30 text-info bg-info/10'
    }
    let alertCore = 'relative text-sm w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute'
    let alertStyles = twJoin(alertCore, alertVariant[variant])
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
    <h5 class="mb-1 font-semibold capitalize dark:font-medium">{title}</h5>
    <p>{description}</p>
</div>
