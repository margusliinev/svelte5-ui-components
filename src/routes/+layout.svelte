<script>
    import '../styles/fonts.css'
    import '../styles/index.css'
</script>

<div class="min-h-[calc(screen - 4rem)] mx-auto max-w-screen-2xl md:w-screen-80">
    <header class="grid h-24 grid-cols-[auto_1fr] items-center bg-purple-100">
        <div class="w-60">
            <h1>Svelte 5 UI Components</h1>
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
    <div class="grid md:grid-cols-[auto_1fr]">
        <aside class="hidden w-60 bg-emerald-100 md:grid">
            <h4 class="text-xs font-medium uppercase text-secondary">Components</h4>
            <ul class="flex flex-col gap-2">
                <li>
                    <a href="/accordion">Accordion</a>
                </li>
                <li>
                    <a href="/alert">Alert</a>
                </li>
                <li>
                    <a href="/badge">Badge</a>
                </li>
                <li>
                    <a href="/breadcrumb">Breadcrumb</a>
                </li>
                <li>
                    <a href="/button">Button</a>
                </li>
                <li>
                    <a href="/card">Card</a>
                </li>
                <li>
                    <a href="/carousel">Carousel</a>
                </li>
                <li>
                    <a href="/checkbox">Checkbox</a>
                </li>
                <li>
                    <a href="/collapse">Collapse</a>
                </li>
                <li>
                    <a href="/dropdown">Dropdown</a>
                </li>
                <li>
                    <a href="/form">Form</a>
                </li>
                <li>
                    <a href="/input">Input</a>
                </li>
                <li>
                    <a href="/modal">Modal</a>
                </li>
                <li>
                    <a href="/nav">Nav</a>
                </li>
                <li>
                    <a href="/pagination">Pagination</a>
                </li>
                <li>
                    <a href="/popover">Popover</a>
                </li>
                <li>
                    <a href="/progress">Progress</a>
                </li>
                <li>
                    <a href="/radio">Radio</a>
                </li>
                <li>
                    <a href="/select">Select</a>
                </li>
                <li>
                    <a href="/spinner">Spinner</a>
                </li>
                <li>
                    <a href="/switch">Switch</a>
                </li>
                <li>
                    <a href="/table">Table</a>
                </li>
                <li>
                    <a href="/tabs">Tabs</a>
                </li>
                <li>
                    <a href="/tag">Tag</a>
                </li>
                <li>
                    <a href="/textarea">Textarea </a>
                </li>
            </ul>
        </aside>
        <main class="bg-blue-100">
            <slot />
        </main>
    </div>
</div>
