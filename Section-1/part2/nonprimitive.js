const username = {
  firstname: "Rohan",
  isLoggedIn: true,
  "home address": "Ambikapur",
};
username.firstname = "Mr. R";
username.lastname = "Rai";
// console.log(username.firstname);
// console.log(username);
// console.log(username.lastname);
// console.log(username["home address"]);
// console.log(typeof username);

let today = new Date();
console.log(today.getDate());

let info = new Object({ firstname: "Rohan", lastname: "Rai" });
// console.log(info);
// console.log(typeof info);
info.address = "Ambikapur";
// console.log(info);

// Array

let heros = ["a", "b", "c", true];
let anotherUser = ["rohan", true];
// console.log(anotherUser[1]);

let isValue = "2abc";
console.log(Number(isValue));
console.log(typeof Number(isValue));
