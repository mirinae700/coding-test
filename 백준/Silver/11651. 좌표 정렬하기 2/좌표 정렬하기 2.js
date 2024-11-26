const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}
arr.sort(compare);
print(arr);

function compare(a, b) {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
}

function print(arr) {
    let result = "";
    for (let data of arr) {
        result += data[0] + " " + data[1] + "\n";
    }
    console.log(result.trim());
}