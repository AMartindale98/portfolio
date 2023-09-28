/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    "./src/pages/**/*.jsx",
    "./src/components/**/*.jsx",
    "./index.html",
  ],
  theme: {
    extend: {},
    home: "url('/background-1.jpg')",
  },
  plugins: [],
};

module.exports = {
  content: ["./src/pages/**/*.jsx", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        "monoton": ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
