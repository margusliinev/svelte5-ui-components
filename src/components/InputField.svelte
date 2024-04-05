<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface InputFieldProps extends HTMLAttributes<HTMLDivElement> {
        type: 'text' | 'email' | 'password' | 'search' | 'datetime-local' | 'date' | 'month' | 'week' | 'time' | 'file';
        label: string;
        error: string;
        placeholder?: string;
        minlength?: number;
        maxlength?: number;
        required?: boolean;
        disabled?: boolean;
    }

    let { type, label, error, placeholder = undefined, minlength = 0, maxlength = 100, required = true, disabled = false, ...rest }: InputFieldProps = $props();
</script>

<div {...rest} class="space-y-1">
    <label for={label} aria-disabled={disabled}>{label}</label>
    <input
        {type}
        id={label}
        name={label}
        aria-describedby={`${label}-error`}
        aria-invalid={error ? true : undefined}
        {placeholder}
        {minlength}
        {maxlength}
        {required}
        {disabled}
        class="relative h-10 w-full appearance-none rounded-md border-0 bg-input px-3 py-2 text-sm leading-6 ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid"
    />
    <span id={`${label}-error`} class="block text-sm text-input-invalid">
        {#if error}
            {error}
        {/if}
    </span>
</div>
