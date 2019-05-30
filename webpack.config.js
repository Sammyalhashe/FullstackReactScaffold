const path = require("path");
/*
 * See this resource for WebPack + Babel setup
 * https://www.valentinog.com/blog/babel/
 */
const config = {
  entry: ["@babel/polyfill", "./lib/renderers/dom.js"],
  resolve: {
    /* this tells webpack to look to these directories when resolving 'require' statements */
    modules: [path.resolve("./lib"), path.resolve("./node_modules")]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: "babel-loader"
      }
    ]
  },
  // might be unecessary here because of above
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = config;
