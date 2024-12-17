const selectArry = [
  { name: "김조순", gender: "male", value: 57 },
  { name: "정하윤", gender: "male", value: 40 },
  { name: "신진호", gender: "male", value: 76 },
  { name: "최유리", gender: "female", value: 51 },
  { name: "최수빈", gender: "female", value: 35 },
];
const selectArry2 = [
  { name: "김상득", gender: "male", value: 15 },
  { name: "오춘계", gender: "female", value: 48 },
  { name: "김득배", gender: "male", value: 72 },
  { name: "김햇살", gender: "female", value: 56 },
  { name: "박춘식", gender: "female", value: 43 },
];

/*Q1. 위의 selectArry 에서 원본 배열을 그대로 두고 성별이 남자인 배열과 여자인 배열을 만들어라 */

/*Q2. 위의 selectArry에서 원본 배열을 이름 내림 차순으로 정렬 시켜라. */

/*Q3 selectArry에 name:"강태진" , gender : "male" 이라는 내용을 추가 하고  name이 김조순인 항목을 삭제 하여라*/

/*Q4 selectArry와 selectArry2를 병합 하고 새로운 배열을 만들고 vqlue 값에 따라 정렬하여라 */

/*Q5 두개의 배열을 병합한 새로운 배열에서 value의 값이 50이하는 제외한 새로운 배열을 만들어라 */

const q1Button = document.getElementById("Q1");
const q2Button = document.getElementById("Q2");
const q3Button = document.getElementById("Q3");
const q4Button = document.getElementById("Q4");
const q5Button = document.getElementById("Q5");
const qTitle = document.getElementById("title");
const textBox = document.getElementById("textBox");
const save = document.getElementById("save");
const init = document.getElementById("init");

const initText = `const selectArry = [
  { name: "김조순", gender: "male", value: 57 },
  { name: "정하윤", gender: "male", value: 40 },
  { name: "신진호", gender: "male", value: 76 },
  { name: "최유리", gender: "female", value: 51 },
  { name: "최수빈", gender: "female", value: 35 },
];
const selectArry2 = [
  { name: "김상득", gender: "male", value: 15 },
  { name: "오춘계", gender: "female", value: 48 },
  { name: "김득배", gender: "male", value: 72 },
  { name: "김햇살", gender: "female", value: 56 },
  { name: "박춘식", gender: "female", value: 43 },
];
`;

const q1Text =
  "Q1. 위의 selectArry 에서 원본 배열을 그대로 두고 성별이 남자인 배열과 여자인 배열을 만들어라";
const q2Text =
  "Q2. 위의 selectArry에서 원본 배열을 이름 내림 차순으로 정렬 시켜라.";
const q3Text =
  "Q3. selectArry에 name:'강태진' , gender : 'male' 이라는 내용을 추가 하고  name이 김조순인 항목을 삭제 하여라";
const q4Text =
  "Q4. selectArry와 selectArry2를 병합 하고 새로운 배열을 만들고 vqlue 값에 따라 정렬하여라";
const q5Text =
  "Q5. 두개의 배열을 병합한 새로운 배열에서 value의 값이 50이하는 제외한 새로운 배열을 만들어라 ";

let click = 6;

const clear = () => {
  qTitle.textContent = "";
  textBox.value = "";
  click = 6;
};

q1Button.addEventListener("click", (e) => {
  if (!localStorage.getItem(1)) {
    localStorage.setItem(1, initText);
  }
  if (click !== 1) {
    click = 1;
    q1Button.style.border = "solid 2px black";
    q2Button.style.border = "0px";
    q3Button.style.border = "0px";
    q4Button.style.border = "0px";
    q5Button.style.border = "0px";

    qTitle.textContent = q1Text;
    textBox.value = localStorage.getItem(1);
  } else {
    q1Button.style.border = "0px";
    clear();
  }
});
q2Button.addEventListener("click", (e) => {
  if (!localStorage.getItem(2)) {
    localStorage.setItem(2, initText);
  }
  if (click !== 2) {
    click = 2;
    q2Button.style.border = "solid 2px black";
    q1Button.style.border = "0px";
    q3Button.style.border = "0px";
    q4Button.style.border = "0px";
    q5Button.style.border = "0px";

    textBox.value = localStorage.getItem(2);
    qTitle.textContent = q2Text;
  } else {
    q2Button.style.border = "0px";
    clear();
  }
});
q3Button.addEventListener("click", (e) => {
  if (!localStorage.getItem(3)) {
    localStorage.setItem(3, initText);
  }
  if (click !== 3) {
    click = 3;
    q3Button.style.border = "solid 2px black";
    q1Button.style.border = "0px";
    q2Button.style.border = "0px";
    q4Button.style.border = "0px";
    q5Button.style.border = "0px";
    textBox.value = localStorage.getItem(3);
    qTitle.textContent = q3Text;
  } else {
    q3Button.style.border = "0px";
    clear();
  }
});
q4Button.addEventListener("click", (e) => {
  if (!localStorage.getItem(4)) {
    localStorage.setItem(4, initText);
  }
  if (click !== 4) {
    click = 4;
    q4Button.style.border = "solid 2px black";
    q1Button.style.border = "0px";
    q2Button.style.border = "0px";
    q3Button.style.border = "0px";
    q5Button.style.border = "0px";
    textBox.value = localStorage.getItem(4);
    qTitle.textContent = q4Text;
  } else {
    q4Button.style.border = "0px";
    clear();
  }
});
q5Button.addEventListener("click", (e) => {
  if (!localStorage.getItem(5)) {
    localStorage.setItem(5, initText);
  }
  if (click !== 5) {
    click = 5;
    q5Button.style.border = "solid 2px black";
    q1Button.style.border = "0px";
    q2Button.style.border = "0px";
    q3Button.style.border = "0px";
    q4Button.style.border = "0px";
    textBox.value = localStorage.getItem(5);
    qTitle.textContent = q5Text;
  } else {
    q5Button.style.border = "0px";
    clear();
  }
});

save.addEventListener("click", () => {
  localStorage.setItem(click, textBox.value);
  alert("저장되었습니다.");
});

init.addEventListener("click", (e) => {
  if (click === 6) {
    alert("문제를 선택해 주세요.");
  } else {
    localStorage.setItem(click, initText);
  }
});
