<script lang="ts">
    import { Toaster } from '$components';
    import '../styles/fonts.css';
    import '../styles/index.css';
    let { children } = $props();
</script>

<Toaster />
{@render children()}
