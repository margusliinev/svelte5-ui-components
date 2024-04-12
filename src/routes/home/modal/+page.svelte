<script lang="ts">
    import { Button, Form, Modal, InputField } from '$components';

    let isModalOpen = $state(false);
</script>

<Button onclick={() => (isModalOpen = true)}>Open Modal</Button>

<Modal bind:open={isModalOpen}>
    <Form class="grid gap-4 p-4">
        <InputField type="text" label="username" />
        <InputField type="email" label="email" />
        <InputField type="password" label="password" />
        <Button variant="primary" size="sm" class="mt-2">Submit</Button>
    </Form>
</Modal>
