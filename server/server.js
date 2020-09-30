import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

const appPath = path.resolve("./src/app");
const App = require(appPath);
console.log("Appppp************", App.default());

const PORT = process.env.PORT || 3006;
const app = express();
const ReactComponent = App.default();
app.get("/*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <ReactComponent />
    </StaticRouter>
  );
  console.log("smalll Apppp", app);
  const indexFile = path.resolve("./dist/index.html");
  console.log("indexFielleeeeeeee", indexFile);
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
