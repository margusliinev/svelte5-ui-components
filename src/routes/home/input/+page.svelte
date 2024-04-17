<script lang="ts">
    import { InputField } from '$components';
</script>

<form class="grid gap-4 md:grid-cols-2">
    <div class="grid gap-2">
        <InputField name="text" type="text" label="text" />
        <InputField name="email" type="email" label="email" />
        <InputField name="password" type="password" label="password" />
        <InputField name="search" type="search" label="search" />
        <InputField name="number" type="number" label="number" />
        <InputField name="tel" type="tel" label="tel" />
    </div>
    <div class="grid gap-2">
        <InputField name="datetime-local" type="datetime-local" label="datetime" />
        <InputField name="date" type="date" label="date" />
        <InputField name="month" type="month" label="month" />
        <InputField name="week" type="week" label="week" />
        <InputField name="time" type="time" label="time" />
        <InputField name="url" type="url" label="url" />
    </div>
</form>
