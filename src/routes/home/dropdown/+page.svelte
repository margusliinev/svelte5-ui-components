<script lang="ts">
    import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, Icon, Link } from '$components';
</script>

<div class="flex flex-wrap items-center gap-10">
    <Dropdown>
        <DropdownButton chevron><Icon name="user" size="sm" /><span>John Doe</span></DropdownButton>
        <DropdownMenu>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Your account</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Settings</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Logout</Link></DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown>
        <DropdownButton>More Options</DropdownButton>
        <DropdownMenu class="grid-cols-2">
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Pricing</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">About</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Privacy</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="!justify-start rounded-none hover:bg-foreground/10">Security</Link></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
