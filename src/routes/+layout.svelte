<script lang="ts">
    import '../styles/fonts.css';
    import '../styles/index.css';
    import { Toaster } from '$components';
    let { children } = $props();
</script>

<Toaster />
{@render children()}
