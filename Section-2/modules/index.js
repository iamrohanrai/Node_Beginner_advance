const fs = require("node:fs");

const content = fs.readFileSync("note.txt", "utf-8");
// console.log(content);

// fs.writeFileSync("copy.txt", content, "utf-8");

// fs.mkdirSync("games/xyx/a", { recursive: true });
fs.unlinkSync("copy.txt");
