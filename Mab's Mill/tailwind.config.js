const classColors = {
  "mage-blue": "#40C7EB",
  "warrior-brown": "#C79C6E",
};

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: classColors,
      maxWidth: {
        "380": "380px",
      },
      width: {
        "380": "380px",
      },
    },
    inset: {
      "-24": "-24px",
    },
  },
  variants: {},
  plugins: [],
};
