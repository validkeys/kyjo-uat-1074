const fs = require("fs");
const bad = [];
if (!fs.existsSync("notes.txt")) bad.push("notes.txt is missing");
if (fs.existsSync("report.txt") && fs.readFileSync("report.txt", "utf8").includes("BAD")) bad.push("report.txt contains BAD");
if (bad.length) { console.error(bad.join("; ")); process.exit(1); }
console.log("lint: clean");
