<script>
    // @ts-nocheck

    import '../styles/fonts.css'
    import '../styles/index.css'

    let { data } = $props()
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-xl lg:w-screen-80">
    <header class="grid h-24 grid-cols-[auto_1fr] items-center">
        <div class="w-60">
            <h1 class="text-xl font-black uppercase italic text-primary">Svelte 5 UI</h1>
        </div>
        <div class="flex items-center justify-between">
            <nav>
                <ul class="flex items-center gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/examples">Examples</a>
                    </li>
                    <li>
                        <a href="https://github.com/margusliinev/svelte5-ui-components" target="_blank">Github</a>
                    </li>
                </ul>
            </nav>
            <div>
                <span>Dark Mode</span>
            </div>
        </div>
    </header>
    <div class="grid lg:grid-cols-[auto_1fr]">
        <aside class="hidden w-60 lg:grid">
            <h4 class="mb-4 text-xs font-medium uppercase text-secondary">Components</h4>
            <ul class="flex max-w-[200px] flex-col gap-2">
                <li>
                    <a href="/alert" class={data.route === '/alert' ? 'grid h-8 w-full items-center rounded-md bg-slate-200 pl-4 text-sm' : 'grid h-8 items-center rounded-md pl-4 text-sm'}>Alert</a>
                </li>
                <li>
                    <a href="/button" class={data.route === '/button' ? 'grid h-8 w-full items-center rounded-md bg-slate-200 pl-4 text-sm' : 'grid h-8 items-center rounded-md pl-4 text-sm'}>Button</a
                    >
                </li>
            </ul>
        </aside>
        <main class="rounded-lg bg-white shadow-md">
            <slot />
        </main>
    </div>
</div>
