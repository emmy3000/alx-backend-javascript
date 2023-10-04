/**
 * babel.config.js
 * This configuration file enables Babel to transpile JavaScript files
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Specify target Node.js version
        },
        modules: 'auto', // Automatically determine how to transform ES6 modules
      },
    ],
  ],
};
