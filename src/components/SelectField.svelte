<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface SelectProps extends HTMLAttributes<HTMLDivElement> {
        label: string;
        error: string;
        options: { [value: string | number]: string | number } | string[] | string;
        disabled?: boolean;
    }

    let { label, error, options, disabled, ...props }: SelectProps = $props();
</script>

<div {...props} class="space-y-1">
    <label for={label} aria-disabled={disabled}>{label}</label>
    <select
        id={label}
        name={label}
        aria-describedby={`${label}-error`}
        aria-invalid={error ? true : undefined}
        {disabled}
        class="relative h-10 w-full appearance-none rounded-md border-0 bg-input px-3 py-2 text-sm leading-6 ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 aria-[invalid]:ring-input-invalid"
    >
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
