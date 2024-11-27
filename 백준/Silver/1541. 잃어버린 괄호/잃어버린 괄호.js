const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

// 뺄셈 연산자 기준으로 그룹을 만든다!
let groups = input[0].split("-");

let result = 0;
// 1. 각 그룹의 합을 구한다.
// 2. 1의 결과를 빼준다.(첫번째 그룹은 더하기)
for (let i = 0; i < groups.length; i++) {
    let sum = groups[i].split("+").map(Number).reduce((a, b) => a + b);
    if (i == 0) result += sum; // 첫번째 그룹은 덧셈
    else result -= sum; // 나머지 그룹은 뺄셈
}
console.log(result);