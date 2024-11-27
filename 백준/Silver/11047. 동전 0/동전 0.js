const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, amount] = input[0].split(" ").map(Number);
let moneyArr = [];
for (let i = 1; i <= n; i++) {
    moneyArr.push(Number(input[i]));
}

// 반복문의 변수를 활용하면 정렬하지 않아도 된다.
let count = 0;
for (let i = n - 1; i >= 0; i--) {
    count += parseInt(amount / moneyArr[i]); // 해당 동전 개수
    amount %= moneyArr[i]; // 해당 동전으로 나눈 나머지(잔액)
}
console.log(count);
