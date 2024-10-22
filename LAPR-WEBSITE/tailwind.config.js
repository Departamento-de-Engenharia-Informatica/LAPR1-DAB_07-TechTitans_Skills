module.exports = {
    darkMode: 'class', // or 'media' if you prefer
    content: [
        './src/**/*.{html,js}', // Adjust the paths according to your project structure
        './index.html',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#ffffffff', // light mode background
                    dark: '#2c302eff', // dark mode background (jet)
                },
                text: {
                    DEFAULT: '#2c302eff', // light mode text (jet)
                    dark: '#ffffffff', // dark mode text (white)
                },
                jasper: '#c05840ff',
                spanish_orange: '#e06f31ff',
                emerald: '#69dc9eff',
                white: '#ffffffff',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
};
