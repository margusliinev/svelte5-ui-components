<script lang="ts">
    import { Form, FormField } from '$components'
</script>

<div class="grid gap-4 lg:grid-cols-2">
    <Form class="gap-2">
        <FormField type="text" label="text" />
        <FormField type="email" label="email" />
        <FormField type="password" label="password" />
        <FormField type="search" label="search" />
        <FormField type="text" label="disabled" disabled />
        <FormField type="text" label="placeholder" placeholder="Placeholder" />
    </Form>
    <Form class="gap-2">
        <FormField type="date" label="date" />
        <FormField type="datetime-local" label="datetime" />
        <FormField type="month" label="month" />
        <FormField type="week" label="week" />
        <FormField type="time" label="time" />
        <FormField type="file" label="file" />
    </Form>
</div>
