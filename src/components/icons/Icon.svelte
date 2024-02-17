<script lang="ts">
    /* eslint-disable */
    import type { SVGAttributes } from 'svelte/elements'
    import icons from './icons'

    interface IconProps extends SVGAttributes<SVGElement> {
        name: string
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        fill?: string
        stroke?: string
        strokeWidth?: string
    }

    let { name, size, fill, stroke, strokeWidth } = $props<IconProps>()

    let iconSizes = {
        xs: '16',
        sm: '20',
        md: '24',
        lg: '28',
        xl: '32'
    }

    let iconSize = iconSizes[size ?? 'md']
    let iconFill = fill ?? 'none'
    let iconStroke = stroke ?? 'currentColor'
    let iconStrokeWidth = strokeWidth ?? '2'
</script>

{@html icons[name]?.replace('<svg', `<svg height=${iconSize} width=${iconSize} fill=${iconFill} stroke=${iconStroke} stroke-width=${iconStrokeWidth}  class='shrink-0' focusable="false"`)}
