const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);

// 최대한 적은 : 5키로 설탕이 많아야한다.
// n = 0 || 5의 배수 : count += n / 5
// n <> 5의 배수 : 5의 배수, 0이 될때까지 3을 뺀다.
// 그외 -1을 반환

let bool = false;
let count = 0;
while (n >= 0) {
    if (n % 5 === 0 || n === 0) {
        count += parseInt(n / 5);
        bool = true;
        console.log(count);
        break;
    }
    n -= 3;
    count += 1;
}

if (!bool) console.log(-1);