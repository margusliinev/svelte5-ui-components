/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', '[data-theme="dark"]'],
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
                background: 'rgb(var(--background)/ <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',

                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
                    hover: 'rgb(var(--primary-hover) / <alpha-value>)'
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary)/ <alpha-value>)',
                    foreground: 'rgb(var(--secondary-foreground)/ <alpha-value>)',
                    hover: 'rgb(var(--secondary-hover)/ <alpha-value>)'
                },
                success: {
                    DEFAULT: 'rgb(var(--success)/ <alpha-value>)',
                    foreground: 'rgb(var(--success-foreground)/ <alpha-value>)',
                    hover: 'rgb(var(--success-hover)/ <alpha-value>)'
                },
                warning: {
                    DEFAULT: 'rgb(var(--warning) / <alpha-value>)',
                    foreground: 'rgb(var(--warning-foreground) / <alpha-value>)',
                    hover: 'rgb(var(--warning-hover) / <alpha-value>)'
                },
                danger: {
                    DEFAULT: 'rgb(var(--danger) / <alpha-value>)',
                    foreground: 'rgb(var(--danger-foreground) / <alpha-value>)',
                    hover: 'rgb(var(--danger-hover) / <alpha-value>)'
                },
                input: {
                    DEFAULT: 'var(--input)',
                    border: 'var(--input-border)',
                    focus: 'var(--input-focus)',
                    placeholder: 'var(--input-placeholder)',
                    invalid: 'var(--input-invalid)'
                },
                border: {
                    DEFAULT: 'var(--border)',
                    strong: 'var(--border-strong)'
                },
                card: {
                    DEFAULT: 'var(--card)',
                    hover: 'var(--card-hover)'
                }
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
            }
        }
    },
    plugins: []
}
