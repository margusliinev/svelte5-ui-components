<script lang="ts">
    import { SidebarHeading, SidebarLink } from '$layout';
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLUListElement> {
        route: string | null;
        toggleSidebar: () => void;
    }

    let { route, toggleSidebar, ...rest }: Props = $props();

    let coreStyles = 'flex max-w-[200px] flex-col gap-2';
    let extraStyles = rest.class ? ' ' + rest.class : '';
</script>

<ul class={coreStyles + extraStyles}>
    <SidebarHeading>components</SidebarHeading>
    <SidebarLink href="/home/alert" {route} {toggleSidebar}>Alert</SidebarLink>
    <SidebarLink href="/home/badge" {route} {toggleSidebar}>Badge</SidebarLink>
    <SidebarLink href="/home/button" {route} {toggleSidebar}>Button</SidebarLink>
    <SidebarLink href="/home/card" {route} {toggleSidebar}>Card</SidebarLink>
    <SidebarLink href="/home/icon" {route} {toggleSidebar}>Icon</SidebarLink>
    <SidebarLink href="/home/link" {route} {toggleSidebar}>Link</SidebarLink>
    <SidebarLink href="/home/dropdown" {route} {toggleSidebar}>Dropdown</SidebarLink>
    <SidebarHeading class="mt-2">forms</SidebarHeading>
    <SidebarLink href="/home/input" {route} {toggleSidebar}>Input</SidebarLink>
    <SidebarLink href="/home/select" {route} {toggleSidebar}>Select</SidebarLink>
    <SidebarLink href="/home/textarea" {route} {toggleSidebar}>Textarea</SidebarLink>
</ul>
