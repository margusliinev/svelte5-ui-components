<script lang="ts">
    import { Button, InputField, Modal } from '$components';

    let isModalOpen = $state(false);
</script>

<Button variant="secondary" onclick={() => (isModalOpen = true)}>Open Modal</Button>

<Modal bind:open={isModalOpen}>
    <h1 class="my-4 text-center text-xl font-medium">Create your account</h1>
    <form class="grid gap-4">
        <InputField type="text" name="username" label="username" />
        <InputField type="email" name="email" label="email" />
        <InputField type="password" name="password" label="password" />
        <Button variant="primary" class="mt-4">Register</Button>
    </form>
</Modal>
