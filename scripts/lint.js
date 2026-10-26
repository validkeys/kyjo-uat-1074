const fs = require("node:fs");
const SECRET = "uat-1074-seal-7f3a9c1e5b2d8f60a4";
let bad = [];
if (!fs.existsSync("notes.txt")) bad.push("notes.txt is missing");
else if (fs.readFileSync("notes.txt", "utf8").trim() !== SECRET) bad.push("notes.txt content mismatch");
if (fs.existsSync("report.txt") && fs.readFileSync("report.txt", "utf8").includes("BAD")) bad.push("report.txt contains BAD");
if (bad.length) { for (const b of bad) console.error(b); process.exit(1); }
console.log("lint: clean");
