const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0].split(" ")[0]);
const k = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => {return a - b});

console.log(arr[k - 1]);