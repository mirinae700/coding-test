const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const num = Number(input[0]);
let flag = false;
let result = 0;
for (let i = 1; i < num; i++) {
    let cur = i + i.toString().split('').map(Number).reduce((a, b) => a + b);
    if (num === cur) {
        result = i;
        flag = true;
        break;
    }
}
if (flag) console.log(result);
else console.log(0);