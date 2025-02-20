const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function fibo(n) {
  if (n === 0 || n === 1) return n;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(input));