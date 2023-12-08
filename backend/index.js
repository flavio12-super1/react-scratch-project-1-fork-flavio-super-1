const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//added hello world comment to index.js

app.use(
  express.static(path.join(__dirname, "../frontend/dist"), { index: false })
);

app.get("/", (req, res) => {
  console.log("sending index.html");
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
