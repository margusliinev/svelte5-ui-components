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
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                    hover: 'var(--primary-hover)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                    hover: 'var(--secondary-hover)'
                },
                success: {
                    DEFAULT: 'var(--success)',
                    foreground: 'var(--success-foreground)',
                    hover: 'var(--success-hover)'
                },
                warning: {
                    DEFAULT: 'var(--warning)',
                    foreground: 'var(--warning-foreground)',
                    hover: 'var(--warning-hover)'
                },
                danger: {
                    DEFAULT: 'var(--danger)',
                    foreground: 'var(--danger-foreground)',
                    hover: 'var(--danger-hover)'
                },
                info: {
                    DEFAULT: 'var(--info)',
                    foreground: 'var(--info-foreground)',
                    hover: 'var(--info-hover)'
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
                xs: 'calc(var(--radius) - 4px)',
                sm: 'calc(var(--radius) - 2px)',
                md: 'calc(var(--radius) + 2px)',
                lg: 'calc(var(--radius) + 4px)',
                xl: 'calc(var(--radius) + 8px)',
                '2xl': 'calc(var(--radius) + 12px)',
                '3xl': 'calc(var(--radius) + 20px)'
            }
        }
    },
    plugins: []
}
