<script lang="ts">
    /* eslint-disable */
    import type { HTMLTextareaAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    interface TextareaProps extends HTMLTextareaAttributes {
        value: string;
        name: string;
        id: string;
    }

    let { id, name, value = $bindable(''), ...props }: TextareaProps = $props();

    function updateValue(e: Event) {
        value = (e.target as HTMLTextAreaElement).value;
    }

    let textareaStyles =
        'flex min-h-[80px] w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-70 disabled:dark:opacity-50 aria-[invalid]:ring-input-invalid';
</script>

<textarea {...props} {id} {name} oninput={updateValue} class={twMerge(textareaStyles, props.class)} />
