const EventEmiter = require("events");
const event = new EventEmiter();

event.on("Hello", () => {
  console.log("Hi I am jeeshan khan");
});

event.emit("Hello");
