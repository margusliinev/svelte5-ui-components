<script lang="ts">
    import '../styles/fonts.css'
    import '../styles/index.css'
    import { Link, ThemeSwitch } from '$components'

    let { data } = $props()
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto w-screen-90 max-w-screen-2xl lg:w-screen-90">
    <header class="grid h-24 grid-cols-[auto_1fr] items-center">
        <div class="w-60">
            <Link href="/" size="icon" class="text-2xl font-black uppercase italic text-primary">Svelte 5 UI</Link>
        </div>
        <div class="flex items-center justify-between">
            <nav>
                <ul class="flex items-center gap-4">
                    <li>
                        <Link href="/home" size="sm" class="bg-primary/20 text-primary hover:bg-primary/30">Home</Link>
                    </li>
                    <li>
                        <Link href="/examples" size="sm" class="bg-primary/20 text-primary hover:bg-primary/30">Examples</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/margusliinev/svelte5-ui-components" size="sm" target="_blank" class="bg-primary/20 text-primary hover:bg-primary/30">GitHub</Link>
                    </li>
                </ul>
            </nav>
            <ThemeSwitch />
        </div>
    </header>
    <div class="mb-20 grid items-start lg:grid-cols-[auto_1fr]">
        <aside class="hidden w-60 lg:grid">
            <h4 class="mb-4 text-xs font-medium uppercase text-secondary">Components</h4>
            <ul class="flex max-w-[200px] flex-col gap-2">
                <li><Link href="/home/alert" size="sm" class={`flex items-center justify-start ${data.route === '/home/alert' ? 'bg-slate-200' : ''}`}>Alert</Link></li>
                <li><Link href="/home/button" size="sm" class={`flex items-center justify-start ${data.route === '/home/button' ? 'bg-slate-200' : ''}`}>Button</Link></li>
                <li><Link href="/home/link" size="sm" class={`flex items-center justify-start ${data.route === '/home/link' ? 'bg-slate-200' : ''}`}>Link</Link></li>
            </ul>
        </aside>
        <main class="h-full w-full rounded-md border bg-card p-6 shadow-sm">
            <slot />
        </main>
    </div>
</div>
