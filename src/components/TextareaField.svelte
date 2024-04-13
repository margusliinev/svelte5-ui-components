<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { Label, FieldError } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        minlength?: number;
        maxlength?: number;
        placeholder?: string;
    }

    let { label, error, required = true, disabled = false, minlength = 0, maxlength = 500, placeholder, ...rest }: Props = $props();

    let value = $state('');
    let textareaStyles = '';
    let coreStyles = 'relative space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <span class="absolute right-0 text-sm">{value?.length ?? 0} / {maxlength}</span>
    <textarea
        id={label}
        name={label}
        {required}
        {disabled}
        {minlength}
        {maxlength}
        {placeholder}
        aria-describedby={`${label}-error`}
        aria-invalid={error ? true : undefined}
        class={textareaStyles}
        bind:value
    />
    {#if error}
        <FieldError id={`${label}-error`}>{error}</FieldError>
    {/if}
</div>
