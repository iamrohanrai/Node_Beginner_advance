const { Buffer } = require("node:buffer");

// const buf = Buffer.alloc(4);

// console.log(buf);

// const buf = Buffer.from("hello rohan");
// console.log(buf);

// console.log(buf.toString());

// const bufTwo = Buffer.allocUnsafe(30);
// console.log(bufTwo);

// const buf = Buffer.alloc(10);
// buf.write("hello");
// console.log(buf.toString());

// const buf = Buffer.from("chai aur code");
// console.log(buf.toString());
// console.log(buf.toString("utf-8", 0, 6));

// const buf = Buffer.from("rohan");
// console.log(buf);
// buf[0] = 0x4a;
// console.log(buf);
// console.log(buf.toString());

const buf1 = Buffer.from("rohan");
const buf2 = Buffer.from(" rai");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged.toString());
console.log(merged.length);
