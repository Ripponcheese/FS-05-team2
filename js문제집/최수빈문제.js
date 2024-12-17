// 1. 다음 코드의 출력값과 자료형을 적어보세요.

let x = 0;
let y = 1;

console.log(x);
console.log(typeof "y");
console.log(Boolean(x));
console.log(String(y));
console.log(x + y);
console.log("x" + "y");
console.log(typeof x);
console.log(typeof Boolean(y));

// 2. 탬플릿 문자열을 활용하여 '1999년생은 2024년에 25살입니다.'를 출력해보세요.

let birth_year = 1999; //태어난 년도
let year = 2024; //올해 년도

function age(x) {
  return year - birth_year;
} //나이를 계산하는 함수

console.log(); //탬플릿 문자열을 이용하여 간단하게 작성해보세요.

//3. 배열 값이 짝수인지 홀수인지 확인하는 함수를 작성하여, 결과를 resultArray 배열로 반환하여 출력하세요.

let Array = [3, 19, 156, 33, 100];

function OddEven() {
  resultArray = [];
  //짝수이면 Even, 홀수라면 Odd로 반환하세요.
}

//4. 삼각형의 넓이를 계산하는 함수 calculateTriangleArea() 함수를 만들어보세요.

function calculateTriangleArea() {}

let area1 = calculateTriangleArea(3, 4); //높이 3, 밑변 4
let area2 = calculateTriangleArea(10, 7); //높이 10, 밑변 7
let area3 = calculateTriangleArea(25, 8); //높이 25, 밑변 8

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

//결과 Area1: 6, Area2: 35, Area3: 100

//5. f번째 피보나치 수열을 출력하는 함수를 작성해보세요.

let f = 5;

function fibonacci(f) {
  let n;

  console.log(`${f}번째 피보나치 수열은 ${n}입니다.`);
}
