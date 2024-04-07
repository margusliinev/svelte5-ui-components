<script lang="ts">
    import { SidebarHeading, SidebarLink } from '$layout';

    interface Props {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar }: Props = $props();
</script>

<ul class="flex max-w-[200px] flex-col gap-2">
    <SidebarHeading>components</SidebarHeading>
    <SidebarLink href="/home/alert" {route} {toggleSidebar}>Alert</SidebarLink>
    <SidebarLink href="/home/badge" {route} {toggleSidebar}>Badge</SidebarLink>
    <SidebarLink href="/home/button" {route} {toggleSidebar}>Button</SidebarLink>
    <SidebarLink href="/home/card" {route} {toggleSidebar}>Card</SidebarLink>
    <SidebarLink href="/home/icon" {route} {toggleSidebar}>Icon</SidebarLink>
    <SidebarLink href="/home/link" {route} {toggleSidebar}>Link</SidebarLink>
    <SidebarLink href="/home/dropdown" {route} {toggleSidebar}>Dropdown</SidebarLink>
    <SidebarHeading>forms</SidebarHeading>
    <SidebarLink href="/home/input" {route} {toggleSidebar}>Input</SidebarLink>
    <SidebarLink href="/home/select" {route} {toggleSidebar}>Select</SidebarLink>
    <SidebarLink href="/home/textarea" {route} {toggleSidebar}>Textarea</SidebarLink>
</ul>
