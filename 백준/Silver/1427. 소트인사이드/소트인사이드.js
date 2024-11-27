const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let data = input[0];
let arr = [];
for (let i = 0; i < data.length; i++) {
    arr.push(Number(data.charAt(i)));
}
arr.sort((a, b) => b - a);

let result = arr.reduce((a, b) => a + "" + b);
console.log(result);