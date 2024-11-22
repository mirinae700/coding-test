const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let subjectCnt = Number(input[0]);
let scores = input[1].split(' ').map(Number);
let max = Math.max(...scores);

let newScores = scores.map((score) => score / max * 100);
let sum = newScores.reduce((a, b) => a + b);
const avg = sum / subjectCnt;

console.log(avg);