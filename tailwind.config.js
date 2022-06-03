module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'],
      'title': ['Rubik Mono One', 'sans-serif'],
      'subtitle': ['Roboto Mono', 'monospace'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
