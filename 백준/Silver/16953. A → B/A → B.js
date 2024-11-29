// 연산 전의 값(a)이아닌 연산 후의 결과값(b)을 활용한다.
// b % 2 === 0 : b /= 2
// b % 10 === 1 : b /= 10
// 위의 두 경우에 해당하지 않는 경우 : 반복문 종료, -1 반환
// b === a : 반복문 종료(연산 전의 값이 이미 결과 값과 일치하는 경우가 있을 수 있다.)

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let count = 1;
let flag = false;

while (a <= b) {
    if (a === b) {
        console.log(count);
        flag = true;
        break;
    } 
    
    if (b % 2 === 0) b = parseInt(b / 2);
    else if (b % 10 === 1) b = parseInt(b / 10);
    else break;
    count += 1;
}

if (!flag) console.log(-1);