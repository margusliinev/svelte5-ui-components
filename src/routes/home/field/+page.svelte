<script lang="ts">
    import { Form, InputField, TextareaField, SelectField } from '$components';
    let fruits = { 1: 'Apple', 2: 'Banana', 3: 'Cherry', 4: 'Orange' };
</script>

<Form class="grid grid-cols-2 gap-4">
    <fieldset class="grid gap-4">
        <InputField type="text" label="text" error="" />
        <InputField type="email" label="email" error="" />
        <InputField type="password" label="password" error="" />
        <InputField type="search" label="search" error="" />
        <InputField type="text" label="disabled" disabled error="" />
        <InputField type="text" label="placeholder" placeholder="Placeholder" error="" />
    </fieldset>
    <fieldset class="grid gap-4">
        <InputField type="datetime-local" label="datetime" error="" />
        <InputField type="date" label="date" error="" />
        <InputField type="month" label="month" error="" />
        <InputField type="week" label="week" error="" />
        <InputField type="time" label="time" error="" />
        <InputField type="file" label="file" error="" />
    </fieldset>
    <TextareaField label="textarea" error="" />
    <SelectField label="fruits" options={fruits} error=""></SelectField>
</Form>
