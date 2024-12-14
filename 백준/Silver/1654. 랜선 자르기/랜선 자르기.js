const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [k, n] = input[0].split(' ');
const arr = [];
for (let i = 1; i <= k; i++) {
    arr.push(Number(input[i]));
}

let result = 0;
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

while ( start <= end) {
    const mid = Math.floor((start + end) / 2);
    let total = 0; // mid 길이로 잘랐을때 랜선 개수
    for (lan of arr) total += Math.floor(lan / mid);

    if (total < n) { // 필요한 랜선 개수보다 작은 경우 길이를 줄여야한다.
        end = mid - 1;
    } else { // 필요한 랜선 개수보다 큰 경우 길이를 늘려본다.
        result = mid;
        start = mid + 1;
    }
}
console.log(result);