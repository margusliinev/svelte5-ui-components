<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { FieldError, Label } from '$components';

    interface SelectProps extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error: string;
        options: { [value: string | number]: string | number } | string[] | string;
        disabled?: boolean;
    }

    let { label, error, options, disabled, ...props }: SelectProps = $props();
</script>

<div {...props}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <select id={label} name={label} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} {disabled}>
        {#each Object.entries(options) as [key, value] (key)}
            <option value={key}>{value}</option>
        {/each}
    </select>
    <FieldError id={`${label}-error`}>
        {#if error}
            {error}
        {/if}
    </FieldError>
</div>
