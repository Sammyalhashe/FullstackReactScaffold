const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./lib/renderers/dom.js"],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "bundle.js",
    },
    resolve: {
        /* this tells webpack to look to these directories when resolving 'require' statements */
        modules: [path.resolve("./lib"), path.resolve("./node_modules")],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"],
                },
                use: "babel-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
                // include: [path.resolve("./lib/components")],
                // loaders: ["style-loader", "css-loader", "scss-loader"],
            },
        ],
    },
    // might be unecessary here because of above
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
};
