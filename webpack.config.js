const path = require("path");
const HtMLWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
module.exports = {
  entry: "./public/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new WasmPackPlugin({
      //will returns the root dir of our project
      crateDirectory: path.resolve(__dirname, "."),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
