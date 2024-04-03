<script lang="ts">
    import { Button, Form, Select } from '$components';
    let fruits = { 1: 'Apple', 2: 'Banana', 3: 'Cherry', 4: 'Orange' };
</script>

<Form onsubmit={(e) => e.preventDefault()} class="max-w-sm gap-2">
    <Select id="fruits" name="fruits" options={fruits}></Select>
    <Button variant="primary" size="sm" class="mt-2 w-24">Sign up</Button>
</Form>
