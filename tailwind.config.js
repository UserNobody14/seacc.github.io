/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./index.html"],
    /**
     * Transform all of the js class names into tailwind css class names
     */
    transform: {
      html: (content) => {
        ///////
        // Config
        ///////

        const config = {
          underScoreToDash: true,
          camelCaseToDash: true,
          alignDigitToDash: true,
          prefix: "",
          suffix: "",
        };

        ///////
        // Correct the class name
        ///////

        const correctClassName = (className) => {
          let result = className;
          if (config.underScoreToDash) result = result.replace(/_/g, "-");
          if (config.camelCaseToDash)
            result = result.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          if (config.alignDigitToDash)
            result = result.replace(/([a-z])(\d+)/g, "$1-$2");
          return config.prefix + result + config.suffix;
        };

        return content.replaceAll(/(\w+)/g, (match, classes) => {
          return correctClassName(classes);
        });
      },
    },
  },
  // safelist: [
  //   {
  //     pattern: /./, // the "." means "everything"
  //   },
  // ],
  theme: {
    extend: {
      backgroundImage: {
        'eacc-pattern': "url('/assets/eacc.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
