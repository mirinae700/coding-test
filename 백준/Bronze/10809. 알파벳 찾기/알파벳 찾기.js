const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().trim().split('');

const result = {};
let idx = 97;
for (let i = 0; i < 26; i++) {
    result[idx] = -1;
    idx++;
}
for (let i = 0; i < data.length; i++) {
    if (result[data[i].charCodeAt()] === -1) result[data[i].charCodeAt()] = i;
}

let answer = '';
for (const key in result) {
    answer += result[key] + ' ';
}
console.log(answer.trim());