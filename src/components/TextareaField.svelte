<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface TextareaFieldProps extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error?: string;
        placeholder?: string;
        minlength?: number;
        maxlength?: number;
        required?: boolean;
        disabled?: boolean;
    }

    let { label, error, placeholder = undefined, minlength = 0, maxlength = 500, required = true, disabled = false, ...rest }: TextareaFieldProps = $props();

    let value = $state('');
</script>

<div {...rest} class="relative space-y-1">
    <label for={label} aria-disabled={disabled}>{label}</label>
    <span class="absolute right-0 text-sm">{value?.length ?? 0} / {maxlength}</span>
    <textarea
        id={label}
        name={label}
        aria-describedby={`${label}-error`}
        aria-invalid={error ? true : undefined}
        {placeholder}
        {minlength}
        {maxlength}
        {required}
        {disabled}
        bind:value
        class="relative min-h-24 w-full appearance-none rounded-md border-0 bg-input px-3 py-2 text-sm leading-6 ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid"
    />
    <span id={`${label}-error`} class="block text-sm text-input-invalid">
        {#if error}
            {error}
        {/if}
    </span>
</div>
