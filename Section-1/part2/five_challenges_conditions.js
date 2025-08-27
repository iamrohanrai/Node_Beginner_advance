// check if a number is greater than another number:
let num1 = 15;
let num2 = 15;
if (num1 == num2) {
  console.log(`Both num are equal`);
} else if (num2 > num1) {
  console.log(`Greatest num is: ${num2}`);
} else {
  console.log(`Greatest num is: ${num1}`);
}

// checking if string is equal to another string

let username = "chai";
let anotherUsername = "chai";
if (username != anotherUsername) {
  console.log(`Pick another username`);
} else {
  console.log(`Pick this username`);
}

// checking if a variable is a number or not
let value = 25;
if (typeof value === "number") {
  console.log(`value is number`);
} else {
  console.log(`No that is not a number`);
}

// check if a boolean value is true or false
let isTeaReady = false;
if (isTeaReady) {
  console.log(`Tea is ready`);
} else {
  console.log(`Tea is not ready`);
}

// check if array is empty or not
let arr = [];
if (arr.length === 0) {
  console.log(`array is empty`);
} else {
  console.log(`array is not empty`);
}
