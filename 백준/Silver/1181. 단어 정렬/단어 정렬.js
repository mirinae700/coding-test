const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let set = new Set();
for (let i = 1; i <= n; i++) {
    set.add(input[i]); // 중복 단어 제거
}
let arr = [...set];
arr.sort(compare);

let result = "";
for (const str of arr) {
    result += str + "\n";
}
console.log(result.trim());

function compare(a, b) {
    if (a.length !== b.length) { // 길이가 같지 않은경우 짧은 것 부터
        return a.length - b.length;
    } else {
        if (a < b) return -1;
        else if ( a > b) return 1;
        else return 0;
    }
}