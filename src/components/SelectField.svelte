<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { FieldError, Label } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        label: string;
        error?: string;
        disabled?: boolean;
        placeholder?: string;
    }

    let { children, label, error, disabled = false, placeholder, ...rest }: Props = $props();

    let selectStyles =
        'relative h-10 w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid';
    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <select id={label} name={label} {disabled} {placeholder} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} class={selectStyles}>
        {@render children?.()}
    </select>
    {#if error}
        <FieldError id={`${label}-error`}>{error}</FieldError>
    {/if}
</div>
