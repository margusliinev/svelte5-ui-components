<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        type: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url' | 'datetime-local' | 'date' | 'month' | 'week' | 'time';
        name: string;
        label?: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        placeholder?: string;
    }

    let { type, name, label, error, required = true, disabled = false, placeholder, ...rest }: Props = $props();

    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={name} aria-disabled={disabled}>{label}</label>
    {/if}
    <input {type} id={name} {name} {required} {disabled} {placeholder} aria-describedby={`${name}-error`} aria-invalid={error ? true : undefined} />
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
