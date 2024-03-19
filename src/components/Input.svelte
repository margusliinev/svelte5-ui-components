<script lang="ts">
    import { Icon } from '$components';
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    interface InputProps extends HTMLInputAttributes {
        type: HTMLInputAttributes['type'];
        id: string;
        name: string;
    }

    let { type, id, name, class: className, ...props }: InputProps = $props();

    let inputStyles =
        'h-10 flex w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:text-foreground placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 disabled:dark:opacity-50 aria-[invalid]:ring-input-invalid';
</script>

{#if type === 'date' || type === 'datetime-local' || type === 'month' || type === 'week'}
    <div class="relative [&>svg]:absolute [&>svg]:right-3 [&>svg]:top-3 [&>svg]:z-0">
        <Icon name="calendar" size="xs" />
        <input {...props} {type} {id} {name} class={twMerge(inputStyles, className)} />
    </div>
{:else if type === 'time'}
    <div class="relative [&>svg]:absolute [&>svg]:right-3 [&>svg]:top-3 [&>svg]:z-0">
        <Icon name="clock" size="xs" />
        <input {...props} {type} {id} {name} class={twMerge(inputStyles, className)} />
    </div>
{:else if type === 'file'}
    <div class="relative [&>svg]:absolute [&>svg]:right-3 [&>svg]:top-3 [&>svg]:z-0">
        <Icon name="upload" size="xs" />
        <input {...props} {type} {id} {name} class={twMerge(inputStyles, className)} />
    </div>
{:else}
    <input {...props} {type} {id} {name} class={twMerge(inputStyles, className)} />
{/if}

<style>
    input[type='file']::-webkit-file-upload-button {
        position: absolute;
        color: transparent;
        z-index: 10;
        right: 0;
    }
    input[type='file'] {
        line-height: 1.75;
    }
    input[type='time']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-calendar-picker-indicator,
    input[type='month']::-webkit-calendar-picker-indicator,
    input[type='week']::-webkit-calendar-picker-indicator,
    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
        background: none;
        z-index: 10;
    }
</style>
