const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let count = 1;
let start = 1;
let end = 1;

while (true) {
  if (n >= start && n <= end) break;
  else {
    start = end + 1;
    end = start + count * 6 - 1;
    count += 1;
  }
}
console.log(count);