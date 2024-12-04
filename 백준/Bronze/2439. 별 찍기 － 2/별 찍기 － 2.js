const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
let result = '';
for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
        if (j <= i) result += '*';
        else result += ' ';
    }
    result += '\n';
}
console.log(result);