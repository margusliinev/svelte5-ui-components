<script lang="ts">
    import { CheckboxField } from '$components';
</script>

<form class="grid max-w-sm gap-2">
    <CheckboxField name="newsletter" label="Subscribe to our newsletter" class="flex items-center gap-2" />
    <CheckboxField name="newsletter" label="Checked by default" class="flex items-center gap-2" checked />
</form>
