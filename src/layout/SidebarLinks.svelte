<script lang="ts">
    import { SidebarHeading, SidebarLink } from '$layout';

    interface SidebarLinksProps {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar }: SidebarLinksProps = $props();
</script>

<ul class="flex max-w-[200px] flex-col gap-2">
    <SidebarHeading>components</SidebarHeading>
    <SidebarLink href="/home/alert" {route} {toggleSidebar}>alert</SidebarLink>
    <SidebarLink href="/home/badge" {route} {toggleSidebar}>badge</SidebarLink>
    <SidebarLink href="/home/button" {route} {toggleSidebar}>button</SidebarLink>
    <SidebarLink href="/home/card" {route} {toggleSidebar}>card</SidebarLink>
    <SidebarLink href="/home/dropdown" {route} {toggleSidebar}>dropdown</SidebarLink>
    <SidebarLink href="/home/icon" {route} {toggleSidebar}>icon</SidebarLink>
    <SidebarLink href="/home/link" {route} {toggleSidebar}>link</SidebarLink>
    <SidebarHeading>forms</SidebarHeading>
    <SidebarLink href="/home/form" {route} {toggleSidebar}>form</SidebarLink>
    <SidebarLink href="/home/formfield" {route} {toggleSidebar}>formField</SidebarLink>
</ul>
