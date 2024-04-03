<script lang="ts">
    import type { HTMLSelectAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    interface SelectProps extends HTMLSelectAttributes {
        options: { [value: string | number]: string | number } | string[] | string;
    }

    let { value = $bindable(''), options, ...props }: SelectProps = $props();

    function updateValue(e: Event) {
        value = (e.target as HTMLSelectElement).value;
    }

    let selectStyles =
        'h-10 flex w-full items-center justify-between rounded-md bg-input px-3 py-2 text-sm ring-1 !ring-inset ring-border border-0 ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 disabled:dark:opacity-50 aria-[invalid]:ring-input-invalid';
</script>

<select {...props} onchange={updateValue} class={twMerge(selectStyles, props.class)}>
    {#each Object.entries(options) as [key, value] (key)}
        <option value={key}>{value}</option>
    {/each}
</select>
