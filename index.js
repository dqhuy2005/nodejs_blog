const express = require("express");
const app = express();
const port = 3000;

app.get("/home-page", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
});
