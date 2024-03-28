<script lang="ts">
    import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, Icon, Link, Button, Form } from '$components';
</script>

<div class="flex flex-wrap items-center gap-10">
    <Dropdown>
        <DropdownButton icon><Icon name="user" size="sm" /><span>John Doe</span></DropdownButton>
        <DropdownMenu>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Your account</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Settings</Link></DropdownItem>
            <DropdownItem><Form><Button style="plain" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Logout</Button></Form></DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown>
        <DropdownButton>More Options</DropdownButton>
        <DropdownMenu class="grid-cols-2">
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Pricing</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">About</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Privacy</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Security</Link></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
