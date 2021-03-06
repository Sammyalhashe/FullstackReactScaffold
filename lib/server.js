// middleware
import bodyParser from "body-parser";
import cors from "cors";
// express
import express from "express";
// miscelaneous
import path from "path";
// application imports
import { port } from "./config";
import serverRender from "./renderers/server";


// for hot module replacement in dev mode
if (process.env.NODE_ENV === "development") {
}
// init express app
const app = express();
console.log(__dirname + "/assets");
console.log(path.resolve(__dirname, "../assets"));

console.log(process.env.NODE_ENV);
// for hot module replacement in dev mode
if (process.env.NODE_ENV == "development") {
    // webpack -> HMR
    const webpack = require("webpack");
    const webpackConfig = require("../webpack.config");
    const webpackDev = require("../webpack.dev");
    // const compiler = webpack(webpackConfig);
    const compiler = webpack(webpackDev);
    // webpack HMR init
    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: false,
            publicPath: webpackDev.output.publicPath,
        })
    );
    app.use(require("webpack-hot-middleware")(compiler));
}

// set view engine and set up static folders
app.set("view engine", "pug");
app.use(express.static(path.resolve(__dirname, "../assets")));
app.use(express.static(path.resolve(__dirname, "../public")));

// set up express to use middleware
app.use(cors());
app.use(bodyParser());

// endpoints -> good practice to break into routes. See https://expressjs.com/en/guide/routing.html
app.get("/", async (req, res) => {
    const initialContent = await serverRender();
    res.render("index", {
        ...initialContent,
    });
});

app.listen(port, () => {
    console.log(`Express application listening on port ${port}`);
});
