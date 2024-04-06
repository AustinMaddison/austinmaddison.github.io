/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "../layouts/**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        "1": 1,
      },
      fontFamily: {
        'sans': ['HelveticaNeueLTStd',  'sans-serif'],
        'sans-thai': ["Noto Sans Thai", 'sans-serif']
      },
    },
  },
  plugins: [],
}

