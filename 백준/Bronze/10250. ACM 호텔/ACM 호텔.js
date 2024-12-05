// 층과 상관없이 빠른 번호의 방 우선배치
// 번호가 같다면 낮은 층 우선
// 손님수 > 층수 : 12, 5
// 1. 방번호 : 5명까지는 1번, 6~10 2번, 11~15 3번
//    방번호 += (손님수 / 층수)
// 2. 층수 : (12, 11) = 1 / (12, 10) = 2 / (12, 9) = 3 / (12, 6) = 6 / (12, 5) = 2 
//    층수 = (손님수 % 층수) , 0이라면 층수

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
    const [h, w, n] = input[t].split(' ').map(Number); // 층수, 방수, 손님순서
    let room = 0;
    let hight = 0;

    if (n > h) {
        room += Math.ceil(n / h);
        hight = n % h;
        if (hight === 0) hight = h;
    } else {
        room = 1;
        hight += n;
    }

    let result = hight + '' + (room < 10 ? '0' + room : room);
    console.log(result);
}