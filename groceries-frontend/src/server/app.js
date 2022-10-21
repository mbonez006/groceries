import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { groceriesHandler, groceriesPostHandler } from "../pages/groceries";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../pages"));
app.set("view engine", "pug");
app.use("/app.js", express.static("dist/main.bundle.js"));
app.use("/style.css", express.static("dist/style.css"));
app.use("/logo.png", express.static("src/public/img/logo.png"));

app.get("/", groceriesHandler);
app.post("/", groceriesPostHandler, groceriesHandler);

module.exports = app;

export default app;
