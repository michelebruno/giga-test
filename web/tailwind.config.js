const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./components/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ], theme: {
        extend: {
            fontFamily: {
                'sans': ['neue-haas-grotesk-display', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: {
                    DEFAULT: '#999999'
                }
            }
        },
    },
    plugins: [],
}
