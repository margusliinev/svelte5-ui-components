<script lang="ts">
    import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';
    import { Label, Input, FieldError } from '$components';
    import { twMerge } from 'tailwind-merge';

    interface InputFieldProps extends HTMLAttributes<HTMLDivElement> {
        type: HTMLInputAttributes['type'];
        label: string;
        error?: string | undefined;
        placeholder?: string;
        minlength?: number;
        maxlength?: number;
        required?: boolean;
        disabled?: boolean;
    }

    let { label, type, error, placeholder, minlength = 0, maxlength = 100, required = true, disabled = false, ...props }: InputFieldProps = $props();

    let inputFieldStyles = 'space-y-1';
</script>

<div {...props} class={twMerge(inputFieldStyles, props.class)}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <Input
        {type}
        id={label}
        name={label}
        aria-describedby={`${label}-error`}
        aria-invalid={error ? true : undefined}
        oninput={() => (error = '')}
        {placeholder}
        {minlength}
        {maxlength}
        {required}
        {disabled}
    />
    <FieldError id={`${label}-error`}>
        {#if error}
            {error}
        {/if}
    </FieldError>
</div>
