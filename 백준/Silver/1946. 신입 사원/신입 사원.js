const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

let line = 1;
for (let tc = 0; tc < testCase; tc++) {
    const n = Number(input[line]);
    const arr = [];
    for (let i = 1; i <= n; i++) {
        let [a, b] = input[line + i].split(' ').map(Number);
        arr.push([a, b]);
    }
    arr.sort((a, b) => a[0] - b[0]);

    let min = 100001;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i][1] < min) {
            min = arr[i][1];
            count++;
        }
    }
    console.log(count);

    line += n + 1;    
}