<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { Label } from '$components';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error: string;
        disabled?: boolean;
        options: { [value: string | number]: string | number } | string[] | string;
    }

    let { label, error = '', disabled = false, options, ...rest }: Props = $props();

    let selectStyles =
        'relative h-10 w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid';
</script>

<div {...rest} class="space-y-1">
    <Label for={label} aria-disabled={disabled}>{label}</Label>
    <select id={label} name={label} {disabled} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} class={selectStyles}>
        {#each Object.entries(options) as [key, value] (key)}
            <option value={key}>{value}</option>
        {/each}
    </select>
    <span id={`${label}-error`} class="block text-sm text-input-invalid">
        {#if error}
            {error}
        {/if}
    </span>
</div>
