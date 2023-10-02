/**
 * babel.config.js
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "12.11",
        parserOpts: {
          allowReturnOutsideFunction: true,
        },
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-nullish-coalescing-operator",
      {
        loose: true, // Enable the loose option
      },
    ],
  ],
};
