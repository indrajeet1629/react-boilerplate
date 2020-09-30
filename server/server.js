import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router-dom";

import App from '../src/app';

const PORT = process.env.PORT || 3006;
const app = express();
// const ReactComponent = App.default();
app.get("/", (req, res) => {
    const context = {};
    const app1 = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>);
    const indexFile = path.resolve("./dist/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Oops, better luck next time!");
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app1}</div>`)
        );
    });
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
