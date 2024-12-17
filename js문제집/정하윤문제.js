//문제 1

const result1 = null || (0 && "Falsy") || "Taejin";
const result2 = (true && "Codeit") || (false && "Ignored") || 42;
const result3 = "Hello" && (undefined || "World") && 0;

console.log(result1);
console.log(result2);
console.log(result3);


// -> 각 변수(result1, result2, result3)는 어떤 값을 가지며, 그 이유는 무엇인가?
//


//문제 2

function test() {
  var x = 10;

  if (true) {
    var x = 20; 
    let y = 30;
    console.log(x); // (1)
    console.log(y); // (2)
  }

  console.log(x); // (3)
  console.log(typeof y); // (4)
}

test();
//
// -> (1), (2), (3), (4) 출력 결과는 각각 무엇인가?



//문제 3

// 아래 calculate 함수는 두 숫자와 콜백 함수를 받아, 콜백 함수를 사용해 계산 결과를 반환한다.
// 더하기, 곱하기 기능을 가진 콜백 함수 argument1, argument2 를 작성해보시오.

function calculate(a, b, callback) {
  return callback(a, b);
}
-> 출력
console.log(calculate(3, 4, argument1)); 
console.log(calculate(3, 4, grgument2));

//문제 4

//아래 conditionalCalculate 함수는 두 수와 콜백 함수를 받아 특정 조건을 만족할떄만 함수를 실행한다.

function conditionalCalculate(a, b, conditionCallback, operationCallback)

- 두 수의 합이 10보다 클 때만 곱셈 콜백 함수를 실행한다.
- 조건을 만족하지 않으면 "조건을 만족하지 않습니다"라고 출력한다.



//문제 5

// 아래 transform함수는 배열과 콜백 함수를 입력으로 받아, 배열의 각 요소에 콜백 함수를 적용한 새로운 배열을 반환합니다.

function transform(array, callback)

주어진 조건을 완성하세요.
- transform 함수는 입력 배열을 변경하지 않고, 새로운 배열을 반환한다.
- 콜백 함수는 배열의 각 요소를 입력으로 받아 변환된 값을 반환한다.
- 입력 배열값 : [1, 2, 3, 4, 5], 출력 배열값: [1, 4, 9, 16, 25]


