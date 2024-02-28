<script lang="ts">
    import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, Icon, Link, Button, Form } from '$components'
</script>

<div class="flex flex-wrap items-center justify-between gap-4">
    <Dropdown>
        <DropdownButton class="border border-border bg-background shadow-sm" icon>Two Columns</DropdownButton>
        <DropdownMenu class="grid w-max grid-cols-2">
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Pricing</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">About</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Privacy</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Security</Link></DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown>
        <DropdownButton class="border border-border bg-background shadow-sm" icon>Four Columns</DropdownButton>
        <DropdownMenu class="grid w-max grid-cols-4">
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Pricing</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">About</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Privacy</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Security</Link></DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown class="w-fit">
        <DropdownButton class="border border-border bg-background shadow-sm" icon><Icon name="user" size="sm" /><span>John Doe</span></DropdownButton>
        <DropdownMenu>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Your account</Link></DropdownItem>
            <DropdownItem><Link href="#" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Settings</Link></DropdownItem>
            <DropdownItem><Form><Button style="plain" size="sm" class="flex justify-start rounded-none hover:bg-foreground/10">Logout</Button></Form></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
