<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        name: string;
        label?: string;
        error?: string;
        required?: boolean;
        disabled?: boolean;
        placeholder?: string;
    }

    let { children, label, name, error, required = true, disabled = false, placeholder, ...rest }: Props = $props();

    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={name} aria-disabled={disabled}>{label}</label>
    {/if}
    <select id={name} {name} {required} {disabled} {placeholder} aria-describedby={`${name}-error`} aria-invalid={error ? true : undefined}>
        {@render children?.()}
    </select>
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
