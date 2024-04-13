<script>
    import { Link } from '$components';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<main class="grid h-screen min-h-screen w-screen place-items-center">
    <section class="w-screen-90 text-center">
        <h1 class="text-7xl font-extrabold text-primary">{$page.error?.status || 500}</h1>
        <h2 class="mt-4 text-5xl font-semibold tracking-tight">{$page.error?.message || 'Internal Server Error'}</h2>
        <h3 class="mt-6 text-lg text-foreground/80">We encountered an error and cannot fulfill the request.</h3>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm">
            <Link href="/home/alert" variant="primary" class="!rounded-full" data-sveltekit-reload>Go Back Home</Link>
        </div>
    </section>
</main>
