const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
    let result = '';
    let [n, str] = input[t].split(' ');
    n = Number(n);
    str = str.split('');

    for (const c of str) {
        for (let i = 0; i < n; i++) {
            result += c;
        }
    }
    console.log(result);
}