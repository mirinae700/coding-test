const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let setArr = [...new Set(arr)];
setArr.sort((a, b) => a - b);

// 정렬된 숫자의 index 정보 (key, value) 형태로 저장
const map = new Map();
for (let i = 0; i < setArr.length; i++) {
    map.set(setArr[i], i);
}

// 원본 배열의 숫자를 key값으로 넘겨 결과 출력
let result = "";
for (let n of arr) {
    result += map.get(n) + " ";
}
console.log(result.trim());