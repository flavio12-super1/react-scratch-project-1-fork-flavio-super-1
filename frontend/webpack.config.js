const path = require("path");
const StylexPlugin = require("@stylexjs/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env", "@babel/preset-react"],
        //   },
        // },
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // Ensure that the stylex plugin is used before Babel
    new StylexPlugin({
      filename: "styles.[contenthash].css",
      // get webpack mode and set value for dev
      dev: argv.mode === "development",
      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      runtimeInjection: false,
      // optional. default: 'x'
      classNamePrefix: "x",
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: "commonJS",
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }),
  ],
  cache: true,
});

module.exports = config;
