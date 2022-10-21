require("@babel/register")({
  presets: ["@babel/preset-env"],
});
require("babel-polyfill");

const app = require("./app");

const PORT = 7080;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
