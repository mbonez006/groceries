import express from "express";
import bodyParser from "body-parser";
import {
  addItem,
  getAllGroceries,
  markItemAsPurchased,
} from "../api/groceries";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/groceries", getAllGroceries);
app.post("/grocery/status", markItemAsPurchased);
app.post("/grocery/add", addItem);

module.exports = app;

export default app;
