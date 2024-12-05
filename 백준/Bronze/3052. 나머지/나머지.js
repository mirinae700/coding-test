const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

const mySet = new Set();
for (const num of data) {
    mySet.add(num % 42);
}
console.log(mySet.size);