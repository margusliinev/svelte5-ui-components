<script lang="ts">
    import { Button, Form, InputField } from '$components';
</script>

<Form onsubmit={(e) => e.preventDefault()} class="max-w-sm gap-2">
    <InputField type="text" label="username" />
    <InputField type="email" label="email" />
    <InputField type="password" label="password" />
    <Button variant="primary" size="sm" class="mt-2 w-24">Sign up</Button>
</Form>
