const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(fs.readFileSync(filePath).toString());

let result = "";
for(let i = 1; i <= n; i++) {
  for(let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result.trim());