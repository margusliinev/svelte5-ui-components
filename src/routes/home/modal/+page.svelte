<script lang="ts">
    import { Button, Modal } from '$components';

    let isModalOpen = $state(false);
</script>

<Button onclick={() => (isModalOpen = true)}>Open Modal</Button>

<Modal bind:open={isModalOpen}>Test</Modal>
