const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let timeArr = input[1].split(" ").map(Number);
timeArr.sort((a, b) => a - b);

let sum = 0;
let result = 0;
for (let i = 0; i < n; i++) {
    sum += timeArr[i];
    result += sum;
}

console.log(result);