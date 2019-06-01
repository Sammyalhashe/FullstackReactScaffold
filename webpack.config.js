const path = require("path");
const webpack = require("webpack");
/*
 * See this resource for WebPack + Babel setup
 * https://www.valentinog.com/blog/babel/
 */
const config = (env = process.env.NODE_ENV || "development") => {
    return {
        mode: env,
        entry: [
            "@babel/polyfill",
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
            "./lib/renderers/dom.js",
            // "webpack-hot-middleware/client",
        ],
        resolve: {
            /* this tells webpack to look to these directories when resolving 'require' statements */
            modules: [path.resolve("./lib"), path.resolve("./node_modules")],
        },
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            filename: "bundle.js",
            // https://medium.com/@johnstew/webpack-hmr-with-express-app-76ef42dbac17
            hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
            hotUpdateMainFilename: ".hot/[hash].hot-update.json",
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
            ],
        },
        // might be unecessary here because of above
        resolve: {
            extensions: [".js", ".jsx"],
            // alias: {
            //     'react-dom': '@hot-loader/react-dom'
            // }
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
    };
};

module.exports = config();
