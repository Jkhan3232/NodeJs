const fs = require("fs");
const http = require("http");
var requests = require("requests");
// const port = 8000;

let homeFile = fs.readFileSync("Home.html", "utf-8");
// homeFile = fs.readFileSync("style.css", "utf-8");
// console.log(homeFile);

const replaceval = (tempVAl, orgVal) => {
  let temprature = tempVAl.replace(
    "{%tempval%}",
    (orgVal.main.temp - 273.15).toFixed(2)
  );
  temprature = temprature.replace(
    "{%tempmin%}",
    (orgVal.main.temp_min - 273.15).toFixed(2)
  );
  temprature = temprature.replace(
    "{%tempmax%}",
    (orgVal.main.temp_max - 273.15).toFixed(2)
  );
  temprature = temprature.replace("{%CIty%}", orgVal.name);
  temprature = temprature.replace("{%Country%}", orgVal.sys.country);
  temprature = temprature.replace("{%statustemp%}", orgVal.weather[0].main);

  return temprature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Agra&appid=ccb3d2f7048c9ceac5e6f19e50d0d7ae"
    )
      .on("data", function (chunk) {
        const orgData = JSON.parse(chunk);
        const arrData = [orgData];
        // console.log(...arrData);
        const realtimedata = arrData
          .map((val) => replaceval(homeFile, val))
          .join("");

        // const DATa = arrData.map((val) => {
        //   console.log(val.main)
        // });
        res.write(realtimedata);

        // console.log(realtimedata);
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);

        // console.log("end");
        res.end();
      });
  }
});
server.listen(3020, "127.0.0.1", () => {
  console.log("listin port nunber");
});
