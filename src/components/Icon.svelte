<script lang="ts">
    /* eslint-disable */
    import type { SVGAttributes } from 'svelte/elements';
    import icons from '../icons';

    interface IconProps extends SVGAttributes<SVGElement> {
        name: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        fill?: string;
        stroke?: string;
        strokeWidth?: string;
    }

    let { name, size = 'md', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }: IconProps = $props();

    let iconSizes = {
        xs: '16',
        sm: '20',
        md: '24',
        lg: '28',
        xl: '32'
    };
</script>

{@html icons[name]?.replace('<svg', `<svg height=${iconSizes[size]} width=${iconSizes[size]} fill=${fill} stroke=${stroke} stroke-width=${strokeWidth} class='antialiased' focusable="false"`)}
