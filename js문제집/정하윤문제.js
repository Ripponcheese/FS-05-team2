// 1번문제

const result1 = null || (0 && "Falsy") || "Taejin";
const result2 = (true && "Codeit") || (false && "Ignored") || 42;
const result3 = "Hello" && (undefined || "World") && 0;

console.log(result1);
console.log(result2);
console.log(result3);


각 변수(result1, result2, result3)는 어떤 값을 가지며, 그 이유는 무엇인가?

//2번 해설

/* 
result1 : "Taejin"

(0 && "Falsy")에서 0은 Falsy → && 연산은 첫 번째 Falsy 값을 반환하므로 전체 결과는 0.
null || 0  →  0 반환.
0 || "Taejin" → "Taejin" 반환.

result2: "Codeit"

(true && "Codeit")에서  → "Codeit" 반환.
"Codeit" || ...에서 ||는 첫 번째 Truthy 값을 반환하므로 "Codeit"로 평가 종료.

result3: 0

"Hello" && ...에서 "Hello"는 Truthy → 평가를 계속 진행.
(undefined || "World")에서  → "World" 반환.
"World" && 0에서 → 0 반환. */


//2번문제

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

(1), (2), (3), (4) 출력 결과는 각각 무엇인가?

//2번 해설
/*
(1):20 , (2):30, (3):20, (4):undefined



//문제 3,4

아래 코드를 완성하시오

function processUserData(name, age, callback) {
  const user = {
    name: name,
    age: age,
  };
  callback(user);
}

// (1) 사용자 데이터를 받아 "안녕하세요, [이름]! 당신은 [나이]살입니다."를 출력하시오.
processUserData("Alice", 25, function (user) {
  // 여기에 콜백 함수 작성
});

// (2) 사용자 나이를 1년 증가시키고, "1년 후 당신은 [나이]살입니다."를 출력하시오.
processUserData("Bob", 30, function (user) {
  // 여기에 콜백 함수 작성
});

//문제 3,4 해설









//문제 5

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

