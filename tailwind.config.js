module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    fontFamily: {
      'sans': ['Monument Extended'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
