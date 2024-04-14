<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        type: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url' | 'datetime-local' | 'date' | 'month' | 'week' | 'time';
        label: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        minlength?: number;
        maxlength?: number;
        placeholder?: string;
    }

    let { type, label, error, required = true, disabled = false, minlength = 0, maxlength = 100, placeholder, ...rest }: Props = $props();

    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    <label for={label} aria-disabled={disabled}>{label}</label>
    <input id={label} name={label} {type} {required} {disabled} {minlength} {maxlength} {placeholder} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} />
    {#if error}
        <div id={`${label}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
