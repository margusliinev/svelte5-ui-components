<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements'
    import type { SubmitFunction } from '@sveltejs/kit'
    import type { Snippet } from 'svelte'
    import { twMerge } from 'tailwind-merge'
    import { enhance } from '$app/forms'

    interface FormProps extends HTMLFormAttributes {
        children: Snippet
        submitFunction?: SubmitFunction
    }

    let { children, submitFunction, class: className, ...props } = $props<FormProps>()

    let formCore = 'grid'
</script>

<form {...props} method="POST" use:enhance={submitFunction} class={twMerge(formCore, className)}>{@render children()}</form>
