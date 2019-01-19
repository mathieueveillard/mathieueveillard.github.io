const express = require("express");
const ejs = require("ejs");

const PORT = 3000;

const app = express();
app.use(express.static("public"));

app.get("/", function(_, res) {
  ejs.renderFile("src/index.ejs", { ROOT_URL: "./" }, {}, (err, str) =>
    res.send(str)
  );
});

app.listen(PORT, function() {
  console.log("http://127.0.0.1:" + PORT);
});
