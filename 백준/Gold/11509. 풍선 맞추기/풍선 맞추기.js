// 화살의 위치가 중요 포인트
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const position = new Array(1000001).fill(0); // 위치별 화살의 개수를 저장
let count = 0;

for (let i = 0; i < n; i++) {
    if (position[arr[i]] === 0) { // 해당 위치에 화살이 없으면
        count += 1;
        position[arr[i]] += 1;
    }
    position[arr[i]] -= 1; // 현재 위치에서 -1
    position[arr[i] - 1] += 1; // 다음 위치에 화살 +1
}
console.log(count);