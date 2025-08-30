const EventEmitter = require("events"); // comes default from node

const eventEmitter = new EventEmitter(); // instance pass kare

eventEmitter.on("greet", (name) => {
  console.log(`Hello ${name}, and welcome to events in node js`);
});

eventEmitter.once("pushNotify", () => {
  console.log("This event will run only once");
});

// Emit the event
// eventEmitter.emit("greet", "rohan");
// eventEmitter.emit("greet", "rounak");
// eventEmitter.emit("greet", "roh");

// eventEmitter.emit("pushNotify");
// eventEmitter.emit("pushNotify");
// eventEmitter.emit("pushNotify");

const myListener = () => {
  console.log("I am a test listener");
};
eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test");

console.log(eventEmitter.listeners("test"));
