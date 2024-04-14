<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { Icon } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        variant: 'success' | 'warning' | 'danger' | 'info';
        title?: string;
    }

    let { children, variant = 'success', title, ...rest }: Props = $props();

    let alertVariants = {
        success: 'border-success/40 text-success-hover bg-success/20',
        warning: 'border-warning/40 text-warning-hover bg-warning/20',
        danger: 'border-danger/40 text-danger-hover bg-danger/20',
        info: 'border-info/40 text-info-hover bg-info/20'
    };
    let coreStyles = `text-sm w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute ${alertVariants[variant]}`;
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} role="alert" class={coreStyles + extraStyles}>
    <Icon name={`${variant}`} size="sm" />
    {#if title}
        <h5 class="mb-1 font-medium capitalize">{title}</h5>
    {/if}
    <p>{@render children?.()}</p>
</div>
