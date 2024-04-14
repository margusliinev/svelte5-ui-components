<script lang="ts">
    import { Button, Modal } from '$components';

    let isModalOpen = $state(false);
</script>

<Button variant="secondary" onclick={() => (isModalOpen = true)}>Open Modal</Button>

<Modal bind:open={isModalOpen}>
    <h1 class="my-4 text-center text-xl font-medium">Create your account</h1>
    <form class="grid gap-2">
        <div class="space-y-1">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
        </div>
        <div class="space-y-1">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
        </div>
        <div class="space-y-1">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>
        <Button variant="primary" class="mt-4">Register</Button>
    </form>
</Modal>
