<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { Icon } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        variant?: 'success' | 'warning' | 'danger' | 'info';
        title?: string;
    }

    let { children, variant = 'danger', title, ...rest }: Props = $props();

    let alertVariants = {
        success: 'border-success/30 text-success-hover bg-emerald-50',
        warning: 'border-warning/30 text-warning-hover bg-amber-50',
        danger: 'border-danger/30 text-danger-hover bg-red-50',
        info: 'border-info/30 text-info-hover bg-sky-50'
    };
    let coreStyles = `relative w-full rounded-md border p-4 text-sm [&>svg]:absolute [&>svg~p]:pl-7 ${alertVariants[variant]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} role="alert" class={coreStyles + extraStyles}>
    <Icon name={`${variant}`} size="sm" />
    {#if title}
        <p class="mb-1 font-medium capitalize">{title}</p>
    {/if}
    <p>{@render children?.()}</p>
</div>
