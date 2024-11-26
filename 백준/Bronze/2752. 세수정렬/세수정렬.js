const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").map(Number);
arr.sort((a, b) => {return a - b});

let result = arr.reduce((a, b) => a + " " + b);
console.log(result);