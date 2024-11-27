const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    const [age, name] = input[i].split(" ");
    arr.push([Number(age), name, i]);
}
arr.sort(compare);

let result = "";
for (const member of arr) {
    result += member[0] + " " + member[1] + "\n";
}
console.log(result);

function compare(a, b) {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    } else {
        return a[2] - b[2];
    }
}