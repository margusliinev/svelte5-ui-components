<script lang="ts">
    import '../styles/fonts.css';
    import '../styles/index.css';

    $effect(() => {
        let theme = localStorage.getItem('theme');
        if (theme) document.documentElement.setAttribute('data-theme', theme);
    });

    let { children } = $props();
</script>

{@render children()}
