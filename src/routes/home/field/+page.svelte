<script lang="ts">
    import { Form, InputField, TextareaField, SelectField } from '$components';
    let fruits = { 1: 'Apple', 2: 'Banana', 3: 'Cherry', 4: 'Orange' };
</script>

<Form class="grid grid-cols-2 gap-4">
    <fieldset class="grid gap-4">
        <InputField type="text" label="text" />
        <InputField type="email" label="email" />
        <InputField type="password" label="password" />
        <InputField type="search" label="search" />
        <InputField type="text" label="disabled" disabled />
        <InputField type="text" label="placeholder" placeholder="Placeholder" />
    </fieldset>
    <fieldset class="grid gap-4">
        <InputField type="datetime-local" label="datetime" />
        <InputField type="date" label="date" />
        <InputField type="month" label="month" />
        <InputField type="week" label="week" />
        <InputField type="time" label="time" />
        <InputField type="file" label="file" />
    </fieldset>
    <TextareaField label="textarea" />
    <SelectField label="fruits" options={fruits}></SelectField>
</Form>
