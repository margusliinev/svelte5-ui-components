<script lang="ts">
    import { Link } from '$components'

    interface SidebarLinksProps {
        route: string | null
        toggleSidebar: () => void
    }

    let { route, toggleSidebar } = $props<SidebarLinksProps>()
</script>

<ul class="flex max-w-[200px] flex-col gap-2">
    <h4 class="mb-4 text-xs font-medium uppercase text-secondary">Components</h4>
    <li><Link href="/home/alert" size="sm" class={`flex items-center justify-start ${route === '/home/alert' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Alert</Link></li>
    <li><Link href="/home/badge" size="sm" class={`flex items-center justify-start ${route === '/home/badge' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Badge</Link></li>
    <li><Link href="/home/button" size="sm" class={`flex items-center justify-start ${route === '/home/button' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Button</Link></li>
    <li><Link href="/home/card" size="sm" class={`flex items-center justify-start ${route === '/home/card' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Card</Link></li>
    <li><Link href="/home/dropdown" size="sm" class={`flex items-center justify-start ${route === '/home/dropdown' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Dropdown</Link></li>
    <li><Link href="/home/link" size="sm" class={`flex items-center justify-start ${route === '/home/link' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Link</Link></li>
    <h4 class="my-4 text-xs font-medium uppercase text-secondary">Forms</h4>
    <li><Link href="/home/form" size="sm" class={`flex items-center justify-start ${route === '/home/form' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>Form</Link></li>
    <li><Link href="/home/formfield" size="sm" class={`flex items-center justify-start ${route === '/home/formfield' ? 'bg-secondary/20' : ''}`} onclick={toggleSidebar}>FormField</Link></li>
</ul>
