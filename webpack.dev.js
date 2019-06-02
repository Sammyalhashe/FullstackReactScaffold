const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack')

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    entry: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"],
    devServer: {
        contentBase: "./dist",
    },
    output: {
        // https://medium.com/@johnstew/webpack-hmr-with-express-app-76ef42dbac17
        hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
        hotUpdateMainFilename: ".hot/[hash].hot-update.json",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
