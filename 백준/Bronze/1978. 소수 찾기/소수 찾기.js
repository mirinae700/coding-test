const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let result = 0;
for (const num of arr) {
    let flag = true;
    for (let i = 2; i <= 1000; i++) {
        if ((num !== i && num % i === 0) || num === 1) {
            flag = false;
            break;
        }
    }
    if (flag) result += 1;
}
console.log(result);