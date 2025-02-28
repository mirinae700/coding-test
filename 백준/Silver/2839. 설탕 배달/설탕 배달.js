const fs = require('fs');
let weight = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 3kg와 5kg 설탕봉지
let result = 0;

while (weight > 0) {
  if (weight % 5 === 0) {
    result += weight / 5;
    break;
  }
  // 5로 나누어지지 않으면, 3빼보고 다시 5로 나누어 지는지 확인
  // 단, 3뺐을때 0보다 작다면 결과는 -1
  weight -= 3;
  result += 1;
  if (weight < 0) result = -1;
}
console.log(result);