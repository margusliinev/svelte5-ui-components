<script lang="ts">
    import { showToast } from '$stores';

    $effect(() => {
        showToast({ message: 'Your changes have been saved successfully', timeout: 50000, title: 'Success', type: 'success' });
        showToast({ message: 'Please note that this action cannot be undone', timeout: 50000, title: 'Warning', type: 'warning' });
        showToast({ message: 'Failed to load data. Please try again later', timeout: 50000, title: 'Error', type: 'danger' });
        showToast({ message: 'You have a new notification. Check your inbox', timeout: 50000, title: 'Info', type: 'info' });
        showToast({ message: 'Your changes have been saved successfully', timeout: 50000, type: 'success' });
        showToast({ message: 'Please note that this action cannot be undone', timeout: 50000, type: 'warning' });
        showToast({ message: 'Failed to load data. Please try again later', timeout: 50000, type: 'danger' });
        showToast({ message: 'You have a new notification. Check your inbox', timeout: 50000, type: 'info' });
    });
</script>
