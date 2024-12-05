const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().trim().split('\n').reduce((a, b) => a * b);

const result = Array(10).fill(0); // 숫자별 사용 횟수 담을 배열
const numList = data.toString().split('');

for (const num of numList) {
    result[num] += 1;
}

for (const r of result) {
    console.log(r);
}