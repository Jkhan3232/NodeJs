const fs = require("fs");
const os = require("os");
const chalk = require("chalk");
const validator = require("validator");
const http = require("http");
const { type } = require("os");
const { fstat } = require("fs");
// fs.writeFileSync("index.txt", "Hello Jeeshan Khan");
// fs.appendFileSync("index.txt", ", AND I Am BCA Student");

// const buffer_data = fs.readFileSync("index.txt");
// console.log(buffer_data.toString());

// fs.renameSync("index.txt", "Read.txt");

// fs.mkdir("Jeehsn khan", (err) => {
//   console.log(`Folder Created ${err}`);
// });

// fs.rmdir("Jeehsn khan", (err) => {
//   console.log(`Folder Deleted ${err}`);
// });

// fs.unlink("Read.txt", (err) => {
//   console.log(`Folder Created ${err}`);
// });

// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(chalk.blue("Hello World"));
// const email = validator.isEmail("jeeshankhan@gmail.com");
// console.log(chalk.green(email));

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello I Am A Local Server");
  } else if (req.url == "/about") {
    res.end("Hello I Am A About Server");
  } else if (req.url == "/contact") {
    res.end("Hello I Am A Contact Server");
  } else if (req.url == "/userapi") {
    fs.readFile("Json.json", "utf-8", (err, data) => {
      // console.log(data);
      const orgdata = JSON.parse(data);
      res.end(orgdata.name);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("page is not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(chalk.blue("listin port nunber 8000"));
});
