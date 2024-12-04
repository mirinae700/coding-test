// 45분 일찍 알람설정하기
// 24시간 표현 사용
// 분 >= 45 : 분 -= 45
// 분 < 45 : 분 -= 45, 시간 -= 1
// 시간||분 < 0 : 시간 += 24, 분 += 60

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let [h, m] = input[0].split(' ').map(Number);

m -= 45;
if (m < 0) {
    m += 60;
    h -= 1;
    if (h < 0) h += 24;
}
console.log(h, m);