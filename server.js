const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get("/category/:name", (req,res) => {
            const actualPage = "/category";
            const queryParams = { name: req.params.name };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server
            .listen(3000, err => {
                if(err) throw err;
                console.log("Listening to port: 3000")
            });
    });