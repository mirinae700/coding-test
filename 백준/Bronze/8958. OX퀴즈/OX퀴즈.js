const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
    const result = input[t].split('');
    let sum = 0;

    for (let i = 0; i < result.length; i++) {
        if (result[i] === 'O') {
            for (let j = i; j >= 0; j--) {
                if (result[j] === 'O') sum += 1;
                else break;
            }
        }
    }
    console.log(sum);
}