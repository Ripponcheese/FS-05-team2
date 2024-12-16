/*
문제 의도 : 콜백 함수, 배열의 이해

주어진 조건을 완성하세요.
이 함수는 배열과 콜백 함수를 입력으로 받아, 배열의 각 요소에 콜백 함수를 적용한 새로운 배열을 반환합니다.

요구사항
함수는 두 개의 매개변수를 받습니다:
array: 숫자를 포함한 배열
callback: 배열의 각 요소에 적용할 콜백 함수

transform 함수는 입력 배열을 변경하지 않고, 새로운 배열을 반환해야 합니다.
콜백 함수는 배열의 각 요소를 입력으로 받아 변환된 값을 반환합니다.
transform 함수와 콜백 함수 모두 작성해야합니다.

// 예시 
const numbers = [1, 2, 3, 4, 5];

const result = transform(numbers, square);
console.log(result); 

// 출력: [1, 4, 9, 16, 25]
*/



// transform 함수
function transform(array, callback) {
  const result = []; // 새로운 빈 배열 생성
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i])); // 각 요소에 콜백 함수를 적용하고 추가
  }
  return result; // 변환된 배열 반환
}

// 콜백 함수
function square(num) {
  return num * num; // 입력받은 숫자의 제곱 반환
}


const numbers = [1, 2, 3, 4, 5];

const result = transform(numbers, square);

console.log(result); // 출력: [1, 4, 9, 16, 25]

