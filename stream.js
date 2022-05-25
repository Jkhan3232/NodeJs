const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // fs.readFile("stream.txt", (err, data) => {
  //   if (err) return console.error(err);
  //   res.end(data.toString());
  // });
  // // res.end("hello");

  // 2nd way

  // const rstream = fs.createReadStream("stream.txt");

  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("file is not found");
  // });

  // 3rd way pipe method

  const rstream = fs.createReadStream("stream.txt");
  rstream.pipe(res);
});
server.listen(3000, "127.0.0.1");
