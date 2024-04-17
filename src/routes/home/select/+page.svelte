<script lang="ts">
    import { SelectField } from '$components';
    let frameworks = [
        { id: 1, name: 'Svelte' },
        { id: 2, name: 'React' },
        { id: 3, name: 'Vue' },
        { id: 4, name: 'Angular' },
        { id: 5, name: 'Solid' }
    ];
</script>

<form class="max-w-sm">
    <SelectField name="frameworks" label="frameworks">
        {#each frameworks as framework (framework.id)}
            <option value={framework.id}>{framework.name}</option>
        {/each}
    </SelectField>
</form>
