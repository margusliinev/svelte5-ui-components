<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { FieldError, Label } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        options: { [value: string | number]: string | number } | string[] | string;
        label: string;
        error?: string;
        disabled?: boolean;
    }

    let { label, error, disabled = false, options, ...rest }: Props = $props();

    let selectStyles =
        'relative h-10 w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid';
    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <select id={label} name={label} {disabled} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} class={selectStyles}>
        {#each Object.entries(options) as [key, value] (key)}
            <option value={key}>{value}</option>
        {/each}
    </select>
    {#if error}
        <FieldError id={`${label}-error`}>{error}</FieldError>
    {/if}
</div>
