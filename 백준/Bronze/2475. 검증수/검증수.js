const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);

let sum = 0;
for (const n of arr) {
    sum += (n ** 2);
}
console.log(sum % 10);