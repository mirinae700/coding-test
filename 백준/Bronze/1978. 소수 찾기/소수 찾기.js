const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let result = 0;
for (const num of arr) {
    if (check(num)) result += 1;
}
console.log(result);

function check(num) {
    if (num < 2) return false;
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
    }
    return true;
}