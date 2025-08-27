// Number

let balance = 150;
let anotherBalance = new Number(135); // not recomended
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());
// console.log(typeof anotherBalance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true);
// console.log(isReallyActive);

// null and undefined
let firstName;
let lastName = null;
// console.log(typeof lastName); // object
// console.log(typeof firstName);

// String

let myString = "hello";
let myStringOne = "hola";
let greetMessage = `Rohan ${myString}`;

let demoOne = `Value is ${2 * (5 + 5) * 3}`;
// console.log(demoOne);

// Symbol

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);
