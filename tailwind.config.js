/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./*.html"],
    theme: {
        extend: {
            backgroundColor: {
                'custom-beige': '#FAF3EA',
            },
        },
    },
    plugins: [],
};
