/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts,svelte}'],
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
                input: {
                    DEFAULT: 'hsl(var(--input) / <alpha-value>)',
                    focus: 'hsl(var(--input-focus) / <alpha-value>)',
                    placeholder: 'hsl(var(--input-placeholder) / <alpha-value>)',
                    invalid: 'hsl(var(--input-invalid) / <alpha-value>)'
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
            },
            backgroundImage: {
                'arrow-light':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E\")",
                'arrow-dark':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E\")",
                'calendar-light':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 3h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z' /%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 3V7M8 3v4M3 11h18' /%3E%3C/svg%3E\")",
                'calendar-dark':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 3h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z' /%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 3V7M8 3v4M3 11h18' /%3E%3C/svg%3E\")",
                'clock-light':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' %3E%3Ccircle cx='12' cy='12' r='10' stroke='black' stroke-width='2' fill='none'/%3E%3Cpath d='M12 6v6l3 3' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' fill='none'/%3E%3Cpath d='M12 18h.01' stroke='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                'clock-dark':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' %3E%3Ccircle cx='12' cy='12' r='10' stroke='white' stroke-width='2' fill='none'/%3E%3Cpath d='M12 6v6l3 3' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' fill='none'/%3E%3Cpath d='M12 18h.01' stroke='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                'file-light':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' %3E%3Cpath d='M14 3v4a1 1 0 0 0 1 1h4'/%3E%3Cpath d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M12 11v6' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M9.5 13.5l2.5 -2.5l2.5 2.5' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")",
                'file-dark':
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' %3E%3Cpath d='M14 3v4a1 1 0 0 0 1 1h4'/%3E%3Cpath d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' fill='none' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M12 11v6' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M9.5 13.5l2.5 -2.5l2.5 2.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")"
            },
            backgroundSize: {
                'size-1': '1rem'
            },
            backgroundPosition: {
                'center-right': 'center right 0.75rem'
            }
        }
    },
    plugins: []
};
