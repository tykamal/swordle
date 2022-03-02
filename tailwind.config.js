module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "540px",
    },
    extend: {
      keyframes: {
          fadeout: {
            from: { top: '200px', opacity: '100%' },
            to: {top: '-50px', opacity: '0%'}
          }
      },
      animation: {
        fadeout: 'fadeout 3s ease-out'
      }
    },
  },
  plugins: [],
}
