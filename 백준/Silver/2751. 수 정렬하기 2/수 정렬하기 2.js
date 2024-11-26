const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let arr = [];
for (let i = 1; i <= count; i++) {
    arr.push(Number(input[i]));
}
arr.sort((a, b) => {return a - b});

let result = arr.reduce((a, b) => a + "\n" + b);
console.log(result);