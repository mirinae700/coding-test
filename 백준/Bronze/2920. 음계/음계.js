const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const data = input[0].split(' ').join('');

if (data === '12345678') console.log('ascending');
else if (data === '87654321') console.log('descending');
else console.log('mixed');