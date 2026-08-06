const fs = require("fs");
const vm = require("vm");

const app = fs.readFileSync("app.js", "utf8");
const block = app.match(/const materialsSelectedQuestionIds = \[([\s\S]*?)\]\.join/)[1];
const ids = [...block.matchAll(/"(me2-[^"]+)"/g)].map((match) => match[1]);
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("data/questions-me2.js", "utf8"), context);
const databaseIds = new Set(context.window.questionBank.map((question) => question.id));
const missing = ids.filter((id) => !databaseIds.has(id));
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

console.log(JSON.stringify({ count: ids.length, missing, duplicates }, null, 2));
if (ids.length !== 82 || missing.length || duplicates.length) process.exit(1);
