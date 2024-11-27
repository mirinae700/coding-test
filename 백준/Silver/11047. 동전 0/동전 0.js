const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, amount] = input[0].split(" ").map(Number);
let moneyArr = [];
for (let i = 1; i <= n; i++) {
    moneyArr.push(Number(input[i]));
}
moneyArr.sort((a, b) => b - a);

let result = 0;
for (m of moneyArr) {
    const count = parseInt(amount / m);
    if (count > 0) {
        result += count;
        amount -= m * count;
    }
}
console.log(result);