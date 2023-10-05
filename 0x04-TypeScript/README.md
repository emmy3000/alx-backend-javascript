# 0x04.TypeScript

### Basic Types in TypeScript

TypeScript provides various basic data types such as numbers, strings, booleans, and more to help you define the types of variables and function parameters.

#### Interfaces, Classes, and Functions

Interfaces and classes allow you to define custom data structures with strong typing. Functions can also have type annotations to specify input and output types.

#### Working with the DOM and TypeScript

TypeScript enables you to interact with the Document Object Model (DOM) efficiently by providing type declarations for DOM elements and events.

#### Generic Types

Generics in TypeScript allow you to create reusable and type-safe components, functions, and classes that can work with different data types.

#### Using Namespaces

Namespaces help organize and encapsulate code by creating a scope for identifiers and preventing naming conflicts.

#### Merging Declarations

TypeScript allows merging declarations of functions, interfaces, or namespaces, making it easier to extend and maintain code.

#### Using an Ambient Namespace to Import External Libraries

You can use ambient namespaces to import external JavaScript libraries and provide type annotations for their usage in TypeScript.

#### Basic Nominal Typing with TypeScript

Nominal typing is a technique in TypeScript to distinguish between types that have the same shape, ensuring type safety in specific scenarios.


### Requirements

- *Jest Version*: TS Scripts will be checked with Jest` (version 24.9.*).
- *Documentation*: Include a `README.md` file for documentation.
- *TS Extension*: Use `.ts` file extension whenever possible to maintain consistency.
- *Error-Free Compilation*: Ensure the TS compiler doesn't produce any warnings or errors when compiling TS source files.


### Base Configuration Files

Create the following source files as the project's basse configurations to be expanded upon as during development.

#### Metadata, Custom & Dependencies(`package.json`):

```json
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}

```

#### ESLint Configurations(`.eslintrc.js`):

```javascript
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};

```

####  Typescript Setting(`tsconfig.json`):

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}

```

#### Webpack Module Bundler Configuration(`webpack.config.js`):

```javascript
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

```

