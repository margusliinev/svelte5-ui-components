<script lang="ts">
    import { Button, Form, FormField } from '$components';
</script>

<Form method="POST" class="max-w-sm gap-2">
    <FormField type="text" label="username" />
    <FormField type="email" label="email" />
    <FormField type="password" label="password" />
    <Button variant="primary" size="sm" class="mt-2 w-24">Sign up</Button>
</Form>
