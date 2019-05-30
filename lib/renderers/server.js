/*
 * This file compiles the React code into a string on the server
 * and returns this markup (initialized with the initialData) as well
 * as the initialData itself if JS is enabled on the host.
 * Axios is imported in case the application has initialData, if the
 * application does not have initialData, just delete it
 */
// React imports
// miscelaneous imports
import axios from "axios";
import React from "react";
import ReactDOMServer from "react-dom/server";
// Application imports
import App from "../components/App";
import { host, port } from "../config";

// base url for axios -> not really necessary (I think); you can just do axios.get()
const ax = axios.create({
    baseURL: `http://${host}:${port}/`,
});

/*
 * This function does the rendering to the string and passes it to the real server
 */
const serverRender = async () => {
    // get initialData if it exists
    const resp = await ax.get("testData.json");

    const initialData = resp.data;
    console.log(
        ReactDOMServer.renderToString(<App initialData={initialData} />)
    );

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App initialData={initialData} />
        ),
        initialData,
    };
};

export default serverRender;
