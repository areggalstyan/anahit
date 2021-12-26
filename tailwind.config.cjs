const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: '#8b8b8b',
        secondary: '#808080',
        text: '#ccc',
        icon: '#b4b4b4'
      }
    },

    fontFamily: {
      sans: ['Raleway', 'Noto Sans Armenian', 'sans-serif'],
      serif: ['Roboto Slab', 'Noto Serif Armenian', 'serif']
    }
  },

  plugins: []
};

module.exports = config;
