const fs = require('fs');
// 문자열 앞뒤로 공백이 입력될 수 있으므로 trim()을 통해 공백을 제거해야한다.
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

if (input[0] === '') console.log(0); // 입력된 단어가 없을 때
else console.log(input.length);