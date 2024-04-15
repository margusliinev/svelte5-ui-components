<script lang="ts">
    import { showToast } from '$stores';
    import { Button } from '$components';
</script>

<Button variant="success" onclick={() => showToast({ description: 'Very successful toast hereasdasdadadasdasdasdasdasdadsadsada', title: 'Success', type: 'success' })}>Success Toast</Button>
<Button variant="danger" onclick={() => showToast({ description: 'Failed updating password', title: 'Error', type: 'danger' })}>Error Toast</Button>
