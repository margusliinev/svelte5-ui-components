<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        name: string;
        label?: string;
        error?: string;
        checked?: boolean;
        disabled?: boolean;
    }

    let { name, label, error, checked = false, disabled = false, ...rest }: Props = $props();

    let coreStyles = '';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={name} aria-disabled={disabled}>{label}</label>
    {/if}
    <input type="checkbox" id={name} {name} {checked} {disabled} aria-describedby={`${name}-error`} aria-invalid={error ? true : undefined} />
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
