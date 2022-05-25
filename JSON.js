const chalk = require("chalk");
const fs = require("fs");

const Biodata = {
  name: "Jeehsna khan",
  class: "BCA Student",
  profeshion: "Web Devloper",
};

const jsondata = JSON.stringify(Biodata);
// console.log(jsondata);
// console.log(chalk.blue(jsondata.name));

// const objactdata = JSON.parse(jsondata);

// console.log(objactdata.name);

fs.writeFile("Json.json", jsondata, (err) => {
  // console.log("done");
  // // stop;
});

fs.readFile("Json.json", "utf-8", (err, data) => {
  // console.log(chalk.blue(data));
  const orignadata = JSON.parse(data);
  console.log(orignadata);
  console.log(chalk.white(data));
});
