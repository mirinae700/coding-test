const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]); // 참가자 수
const tArr = input[1].split(' ').map(Number); // 사이즈 별 티셔츠 수
const [tUnit, pUnit] = input[2].split(' ').map(Number); // 티셔츠 묶음, 펜 묶음

let resultT = 0;
for (let t of tArr) {
    resultT += Math.floor(t / tUnit);
    if (t % tUnit > 0) resultT += 1;
}
console.log(resultT);

let resultP = [Math.floor(n / pUnit), n % pUnit];
console.log(resultP[0] + ' ' + resultP[1]);