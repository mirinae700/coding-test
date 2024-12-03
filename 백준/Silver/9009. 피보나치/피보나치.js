const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const t = Number(input[0]);
const arr = [];
for (let i = 1; i <= t; i++) {
    arr.push(Number(input[i]));
}

const max = Math.max(...arr);
const fArr = [0, 1]; // 피보나치 수 배열
let f = 0;
let idx = 2;
while (true) {
    f = fArr[idx - 1] + fArr[idx - 2];
    if (f > max) break;
    fArr.push(f);
    idx++;
}

for (let n of arr) {
    const result = [];
    let sum = 0;
    for (let i = fArr.length - 1; i > 0; i--) {
        if (sum + fArr[i] <= n) {
            sum += fArr[i];
            result.push(fArr[i]);
        }
    }
    result.sort((a, b) => a - b);
    console.log(...result);
}