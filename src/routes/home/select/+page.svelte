<script lang="ts">
    import { Form, SelectField } from '$components';
    let users = [
        { id: 1, name: 'Svelte' },
        { id: 2, name: 'React' },
        { id: 3, name: 'Vue' },
        { id: 4, name: 'Angular' },
        { id: 5, name: 'Solid' }
    ];
</script>

<Form class="max-w-sm">
    <SelectField label="Frameworks">
        {#each users as user (user.id)}
            <option value={user.id}>{user.name}</option>
        {/each}
    </SelectField>
</Form>
