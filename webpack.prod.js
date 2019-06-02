const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    plugins: [new webpack.optimize.AggressiveMergingPlugin()],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin()],
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
});
