const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]); // 상근이가 가진 숫자카드 개수
const m = Number(input[2]); // 정수의 개수

const cards = input[1].split(' ').map(Number);
const arr = input[3].split(' ').map(Number);

cards.sort((a, b) => {return a - b});

let result = '';
for (num of arr) {
    result += (upperBound(cards, num) - lowerBound(cards, num)) + ' ';
}
console.log(result);

function lowerBound(arr, x) { // 하한선을 반환
    let start = 0;
    let end = arr.length;
    let result = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == x) result = mid;

        if (arr[mid] >= x) end = mid - 1;
        else start = mid + 1;
    }
    return result;
}

function upperBound(arr, x) { // 상한선을 반환
    let start = 0;
    let end = arr.length;
    let result = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == x) result = mid;

        if (arr[mid] <= x) start = mid + 1;
        else end = mid - 1;
    }
    if (result < 0) return result;
    else return result + 1;
}