<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        id: string;
        name: string;
        label?: string;
        error?: string;
        value?: string;
        disabled?: boolean;
    }

    let { id, name, label, error, value, disabled = false, ...rest }: Props = $props();

    let coreStyles = 'flex gap-2 items-center';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={id} aria-disabled={disabled}>{label}</label>
    {/if}
    <input type="radio" {id} {name} {value} {disabled} aria-describedby={`${name}-error`} />
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
