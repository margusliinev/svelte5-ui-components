<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        id: string;
        name: string;
        label?: string;
        error?: string;
        checked?: boolean;
        disabled?: boolean;
    }

    let { id, name, label, error, checked = false, disabled = false, ...rest }: Props = $props();

    let coreStyles = '';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<div {...rest} class={coreStyles + extraStyles}>
    {#if label}
        <label for={id} aria-disabled={disabled}>{label}</label>
    {/if}
    <input type="checkbox" {id} {name} {disabled} aria-describedby={`${name}-error`} bind:checked />
    {#if error}
        <div id={`${name}-error`} role="alert" class="text-sm text-danger">{error}</div>
    {/if}
</div>
