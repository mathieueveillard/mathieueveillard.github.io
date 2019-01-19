const ejs = require("ejs");
const fs = require("fs");
const chalk = require("chalk");

const ROOT_URL = "./public";
ejs.renderFile("src/index.ejs", { ROOT_URL }, {}, (err, str) =>
  writeHtmlInFile(str)
);

function writeHtmlInFile(content) {
  fs.writeFile("index.html", content, err => {
    if (err) {
      console.log(chalk.red(err));
    }
    console.log(
      chalk.green("You rock! index.html has been successfully generated.")
    );
  });
}
