<script lang="ts">
    import { CheckboxField } from '$components';
</script>

<form class="grid max-w-sm gap-2">
    <CheckboxField id="newsletter" name="newsletter" label="Subscribe to our newsletter" class="flex items-center gap-2" />
    <CheckboxField id="default" name="default" label="Checked by default" class="flex items-center gap-2" checked />
</form>
