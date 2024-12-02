const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let line = 0;
while (true) {
    let [a, b, c] = input[line].split(' ').map(Number);

    if (a + b + c === 0) break;

    if ((a * a + b * b) === c * c) console.log('right');
    else if ((a * a) === (b * b + c * c)) console.log('right');
    else if ((b * b) === (a * a + c * c)) console.log('right');
    else console.log('wrong');
    line += 1;
}