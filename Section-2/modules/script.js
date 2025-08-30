const fs = require("node:fs");

// Task: read the conctent of txt file

console.log("start of script");

// sync = blocking code
// const content = fs.readFileSync("note.txt", "utf-8");
// console.log("contents:", content);

// async = non blocking
fs.readFile("note.txt", "utf-8", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("content got - ", data);
  }
});

console.log("end of script");
