<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { Label, FieldError } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        type: 'text' | 'email' | 'password' | 'search' | 'datetime-local' | 'date' | 'month' | 'week' | 'time' | 'file';
        label: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        minlength?: number;
        maxlength?: number;
        placeholder?: string;
    }

    let { type, label, error, required = true, disabled = false, minlength = 0, maxlength = 100, placeholder, ...rest }: Props = $props();

    let inputStyles =
        'relative h-10 w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid';
</script>

<div {...rest} class="space-y-1">
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <input id={label} name={label} {type} {required} {disabled} {minlength} {maxlength} {placeholder} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} class={inputStyles} />
    {#if error}
        <FieldError id={`${label}-error`}>{error}</FieldError>
    {/if}
</div>
