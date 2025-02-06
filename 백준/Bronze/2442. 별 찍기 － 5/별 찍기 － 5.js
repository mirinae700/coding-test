const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(fs.readFileSync(filePath).toString());

let result = "";
for (let i = 1; i <= n; i++) {
  result += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
}
console.log(result);