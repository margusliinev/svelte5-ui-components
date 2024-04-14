<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
        label: string;
        error?: string;
        disabled?: boolean;
        placeholder?: string;
    }

    let { children, label, error, disabled = false, placeholder, ...rest }: Props = $props();

    let coreStyles = 'space-y-1';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    <label for={label} aria-disabled={disabled}>{label}</label>
    <select id={label} name={label} {disabled} {placeholder} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined}>
        {@render children?.()}
    </select>
    {#if error}
        <div id={`${label}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
