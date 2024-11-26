const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
    const coordinate = {};
    [coordinate.x, coordinate.y] = input[i].split(" ").map(Number);
    arr.push(coordinate);
}
arr.sort(compare);
print(arr);

function compare(a, b) {
    if (a.x === b.x) {
        if (a.y - b.y < 0) return -1;
        else if (a.y - b.y > 0) return 1;
    } else {
        if (a.x - b.x < 0) return -1;
        else if (a.x - b.x > 0) return 1;
    }
    return 0;
}

function print(arr) {
    let result = "";
    for (let data of arr) {
        result += data.x + " " + data.y + "\n";
    }
    console.log(result.trim());
}