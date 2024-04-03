<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { Label, Textarea, FieldError } from '$components';
    import { twMerge } from 'tailwind-merge';

    interface TextareaFieldProps extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error?: string;
        placeholder?: string;
        minlength?: number;
        maxlength?: number;
        required?: boolean;
        disabled?: boolean;
    }

    let { label, error, placeholder, minlength = 0, maxlength = 500, required = true, disabled = false, ...props }: TextareaFieldProps = $props();

    let value = $state('');
    let textareaFieldStyles = 'relative space-y-1';
</script>

<div {...props} class={twMerge(textareaFieldStyles, props.class)}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <span class="absolute right-0 text-sm">{value?.length ?? 0} / {maxlength}</span>
    <Textarea
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
        bind:value
    />
    <FieldError id={`${label}-error`}>
        {#if error}
            {error}
        {/if}
    </FieldError>
</div>
