<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        name: string;
        label?: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        minlength?: number;
        maxlength?: number;
        placeholder?: string;
    }

    let { name, label, error, required = true, disabled = false, minlength = 0, maxlength = 500, placeholder, ...rest }: Props = $props();

    let value = $state('');

    let coreStyles = 'relative space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={name} aria-disabled={disabled}>{label}</label>
    {/if}
    <span class="absolute right-0 text-sm">{value?.length ?? 0} / {maxlength}</span>
    <textarea id={name} {name} {required} {disabled} {minlength} {maxlength} {placeholder} aria-describedby={`${name}-error`} aria-invalid={error ? true : undefined} bind:value></textarea>
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
