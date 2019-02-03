const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPack = require("webpack");

module.exports = env => {
  // console.log(env); // env is a object { mode: development or production }
  return {
    output: {
      filename: "bundle.js"
    },
    mode: env.mode,
    plugins: [new HtmlWebpackPlugin(), new WebPack.ProgressPlugin()]
  };
};
