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
    <li><SidebarLink href="/home/alert" {route} {toggleSidebar}>Alert</SidebarLink></li>
    <li><SidebarLink href="/home/badge" {route} {toggleSidebar}>Badge</SidebarLink></li>
    <li><SidebarLink href="/home/button" {route} {toggleSidebar}>Button</SidebarLink></li>
    <li><SidebarLink href="/home/card" {route} {toggleSidebar}>Card</SidebarLink></li>
    <li><SidebarLink href="/home/icon" {route} {toggleSidebar}>Icon</SidebarLink></li>
    <li><SidebarLink href="/home/modal" {route} {toggleSidebar}>Modal</SidebarLink></li>
    <li><SidebarLink href="/home/toaster" {route} {toggleSidebar}>Toaster</SidebarLink></li>
    <li><SidebarLink href="/home/spinner" {route} {toggleSidebar}>Spinner</SidebarLink></li>
    <li><SidebarLink href="/home/dropdown" {route} {toggleSidebar}>Dropdown</SidebarLink></li>
    <SidebarHeading class="mt-2">forms</SidebarHeading>
    <li><SidebarLink href="/home/input" {route} {toggleSidebar}>Input</SidebarLink></li>
    <li><SidebarLink href="/home/select" {route} {toggleSidebar}>Select</SidebarLink></li>
    <li><SidebarLink href="/home/textarea" {route} {toggleSidebar}>Textarea</SidebarLink></li>
    <li><SidebarLink href="/home/checkbox" {route} {toggleSidebar}>Checkbox</SidebarLink></li>
    <li><SidebarLink href="/home/radio" {route} {toggleSidebar}>Radio</SidebarLink></li>
</ul>
