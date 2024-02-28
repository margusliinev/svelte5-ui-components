export type DropdownState = {
    open: boolean
    handleClick?: () => void
    handleKeyDown?: (event: KeyboardEvent) => void
    handleBlur?: (event: FocusEvent) => void
    focusOnLastChild?: (element: HTMLElement | null) => void
    isMenuitem?: (element: HTMLElement | null) => boolean
}

export class CreateDropdownState {
    open = $state(false)

    constructor(initial: DropdownState) {
        this.open = initial.open
    }

    handleClick = () => {
        this.open = !this.open
    }
    handleBlur = (event: FocusEvent) => {
        const element = event?.relatedTarget as HTMLElement
        if (this.open && !element?.closest('[role="menu"]')) this.open = false
    }
    handleKeyDown = (e: KeyboardEvent) => {
        if (this.open && e.key === 'Escape') this.open = false

        const element = e.currentTarget as HTMLElement
        const parentElement = element?.parentElement as HTMLElement
        const nextElement = element?.nextElementSibling as HTMLElement
        const previousElement = element?.previousElementSibling as HTMLElement
        const nextElementChild = nextElement?.firstElementChild as HTMLElement
        const parentElementSibling = parentElement?.previousElementSibling as HTMLElement

        const isArrowUp = e.key === 'ArrowUp'
        const isArrowDown = e.key === 'ArrowDown'

        if (isArrowUp) {
            if (this.isMenuitem(previousElement)) {
                this.focusOnLastChild(previousElement)
            } else if (parentElementSibling?.getAttribute('aria-haspopup') === 'menu') {
                parentElementSibling?.focus()
            }
        } else if (isArrowDown) {
            if (this.isMenuitem(nextElement)) {
                this.focusOnLastChild(nextElement)
            } else if (this.isMenuitem(nextElementChild)) {
                this.focusOnLastChild(nextElementChild)
            }
        }
    }
    focusOnLastChild = (element: HTMLElement | null) => {
        let currentElement: HTMLElement | null = element
        while (currentElement) {
            const lastChild = currentElement.lastElementChild as HTMLElement
            if (!lastChild) {
                return currentElement.focus()
            }
            currentElement = lastChild instanceof HTMLElement ? lastChild : null
        }
    }
    isMenuitem = (element: HTMLElement | null): boolean => {
        return element?.getAttribute('role') === 'menuitem'
    }
}
