/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts,svelte}'],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'Inter Fallback', 'sans-serif']
            },
            width: {
                'screen-90': '90vw',
                'screen-80': '80vw',
                'screen-70': '70vw',
                'screen-60': '60vw',
                'screen-50': '50vw',
                'screen-40': '40vw',
                'screen-30': '30vw',
                'screen-20': '20vw',
                'screen-10': '10vw'
            },
            height: {
                'screen-90': '90vh',
                'screen-80': '80vh',
                'screen-70': '70vh',
                'screen-60': '60vh',
                'screen-50': '50vh',
                'screen-40': '40vh',
                'screen-30': '30vh',
                'screen-20': '20vh',
                'screen-10': '10vh'
            },
            colors: {
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
                    hover: 'hsl(var(--primary-hover) / <alpha-value>)'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary)/ <alpha-value>)',
                    foreground: 'hsl(var(--secondary-foreground)/ <alpha-value>)',
                    hover: 'hsl(var(--secondary-hover)/ <alpha-value>)'
                },
                success: {
                    DEFAULT: 'hsl(var(--success)/ <alpha-value>)',
                    foreground: 'hsl(var(--success-foreground)/ <alpha-value>)',
                    hover: 'hsl(var(--success-hover)/ <alpha-value>)'
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
                    foreground: 'hsl(var(--warning-foreground) / <alpha-value>)',
                    hover: 'hsl(var(--warning-hover) / <alpha-value>)'
                },
                danger: {
                    DEFAULT: 'hsl(var(--danger) / <alpha-value>)',
                    foreground: 'hsl(var(--danger-foreground) / <alpha-value>)',
                    hover: 'hsl(var(--danger-hover) / <alpha-value>)'
                },
                info: {
                    DEFAULT: 'hsl(var(--info) / <alpha-value>)',
                    foreground: 'hsl(var(--info-foreground) / <alpha-value>)',
                    hover: 'hsl(var(--info-hover) / <alpha-value>)'
                },
                border: 'hsl(var(--border) / <alpha-value>)',
                card: 'hsl(var(--card) / <alpha-value>)'
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                none: '0px',
                xs: 'calc(var(--radius) - 4px)',
                sm: 'calc(var(--radius) - 2px)',
                md: 'calc(var(--radius) + 2px)',
                lg: 'calc(var(--radius) + 4px)',
                xl: 'calc(var(--radius) + 8px)',
                '2xl': 'calc(var(--radius) + 12px)',
                '3xl': 'calc(var(--radius) + 20px)',
                full: '9999px'
            },
            animation: {
                spin: 'spin 0.7s linear infinite'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
