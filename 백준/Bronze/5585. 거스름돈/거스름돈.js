const fs = require('fs');
const price = Number(fs.readFileSync('/dev/stdin').toString().trim());

const unit = [500, 100, 50, 10, 5, 1];
let remain = 1000 - price;
let result = 0;

for (let i = 0; i < unit.length; i++) {
  if (price == 0) break;

  const count = parseInt(remain / unit[i]);
  result += count;
  remain -= (unit[i] * count);
}
console.log(result);