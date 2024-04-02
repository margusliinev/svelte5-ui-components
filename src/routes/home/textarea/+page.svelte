<script lang="ts">
    import { Button, Form, TextareaField } from '$components';
</script>

<Form onsubmit={(e) => e.preventDefault()} class="max-w-sm gap-2">
    <TextareaField label="message" />
    <Button variant="primary" size="sm" class="mt-2 w-24">Sign up</Button>
</Form>
