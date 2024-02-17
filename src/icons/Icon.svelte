<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements'
    import { twJoin, twMerge } from 'tailwind-merge'
    import icons from './icons'

    interface IconProps extends SVGAttributes<SVGElement> {
        name: string
        size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        strokeWidth: string
    }

    let { name, size, className, strokeWidth } = $props<IconProps>()

    let iconSizes = {
        xs: {
            width: '16',
            height: '16'
        },
        sm: {
            width: '20',
            height: '20'
        },
        md: {
            width: '24',
            height: '24'
        },
        lg: {
            width: '28',
            height: '28'
        },
        xl: {
            width: '32',
            height: '32'
        }
    }

    let iconSize = iconSizes[size ?? 'md']
</script>

{@html icons[name]?.replace('<svg', `<svg height=${iconSize.height} class=${className} width=${iconSize.width} stroke-width=${strokeWidth} focusable="false"`)}
