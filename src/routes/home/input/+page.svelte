<script lang="ts">
    import { Form, InputField } from '$components';
</script>

<Form class="grid gap-4 md:grid-cols-2">
    <div class="grid gap-2">
        <InputField type="text" label="text" />
        <InputField type="email" label="email" />
        <InputField type="password" label="password" />
        <InputField type="search" label="search" />
        <InputField type="text" label="disabled" disabled />
        <InputField type="text" label="placeholder" placeholder="Placeholder" />
    </div>
    <div class="grid gap-2">
        <InputField type="datetime-local" label="datetime" />
        <InputField type="date" label="date" />
        <InputField type="month" label="month" />
        <InputField type="week" label="week" />
        <InputField type="time" label="time" />
        <InputField type="file" label="file" />
    </div>
</Form>
