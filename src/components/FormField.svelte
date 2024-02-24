<script lang="ts">
    import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements'
    import { Label, Input, InputError } from '$components'
    import { twMerge } from 'tailwind-merge'

    interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
        type: HTMLInputAttributes['type']
        label: string
        error?: string | undefined
        placeholder?: string
        minlength?: number
        maxlength?: number
        required?: boolean
        disabled?: boolean
    }

    let { label, type, error, placeholder, minlength = 0, maxlength = 100, required = true, disabled = false, class: className, ...props } = $props<FormFieldProps>()

    let formFieldStyles = 'space-y-1'
</script>

<div {...props} class={twMerge(formFieldStyles, className)}>
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
    <InputError id={`${label}-error`}>
        {#if error}
            {error}
        {/if}
    </InputError>
</div>
