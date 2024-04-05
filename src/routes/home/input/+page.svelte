<script lang="ts">
    import { Form, InputField, Select, TextareaField } from '$components';
    let fruits = { 1: 'Apple', 2: 'Banana', 3: 'Cherry', 4: 'Orange' };
</script>

<div class="grid gap-4 lg:grid-cols-2">
    <Form class="gap-2">
        <InputField type="text" label="text" error="" />
        <InputField type="email" label="email" error="" />
        <InputField type="password" label="password" error="" />
        <InputField type="search" label="search" error="" />
        <InputField type="text" label="disabled" disabled error="" />
        <InputField type="text" label="placeholder" placeholder="Placeholder" error="" />
    </Form>
    <Form class="gap-2">
        <InputField type="date" label="date" error="" />
        <InputField type="datetime-local" label="datetime" error="" />
        <InputField type="month" label="month" error="" />
        <InputField type="week" label="week" error="" />
        <InputField type="time" label="time" error="" />
        <InputField type="file" label="file" error="" />
    </Form>
    <Form class="gap-2">
        <TextareaField label="textarea" error="" />
    </Form>
    <Form class="gap-2">
        <Select label="fruits" options={fruits} error=""></Select>
    </Form>
</div>
