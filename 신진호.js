// 객체 클래스명 변수 추가
const acButton = document.querySelector(".acbutton"); // 클래스 선택자로 수정, html에서 class명임
const contentButton = document.querySelector(".content-button");

const profileContent = document.querySelector(".profile");
const coreContent = document.querySelector(".core-attributes");
const currentContent = document.querySelector(".current-objectives");
const preferContent = document.querySelector(".preferred-arsenal");
const behavioralContent = document.querySelector(".behavioral-matrix");
const dashboard = document.querySelector(".dashboard");

const accessContent = document.querySelector(".access-denied");

// visible, hidden 반복하는 content요소들의 배열
const contents = [
  profileContent,
  coreContent,
  currentContent,
  preferContent,
  behavioralContent,
];

// [button id, visible component]
const asideButtons = [
  ["#profile-button", profileContent],
  ["#core-button", coreContent],
  ["#current-button", currentContent],
  ["#prefer-button", preferContent],
  ["#behavioral-button", behavioralContent],
];

// 클래스명을 지우는 함수
const removeClassList = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
};
// 클래스명을 추가하는 함수
const addClassList = (element, className) => {
  element.classList.add(className);
};

// aside-button 클릭시 컴포넌트가 스위칭되는 함수
const switchComponent = (visibleEl) => {
  dashboard.classList.add("hidden"); // dashboard 숨기기

  // content 모두 숨기기
  contents.forEach((contentEl) => {
    // contentEl에 visible 있는 경우 visible 클래스명 삭제후 hidden
    removeClassList(contentEl, "visible");
    addClassList(contentEl, "hidden");
  });

  // visibleEl에 hidden class가 있는 경우 hidden 클래스명 삭제후 visible
  removeClassList(visibleEl, "hidden");
  // visible content만 보이게 하기
  addClassList(visibleEl, "visible");
};

asideButtons.forEach(([buttonId, visibleEl]) => {
  const button = document
    .querySelector(buttonId)
    .addEventListener("click", () => switchComponent(visibleEl));
});

// 객체 클래스명 변수 추가
contentButton.addEventListener("click", () =>
  addClassList(accessContent, "visible")
);
acButton.addEventListener("click", () => addClassList(accessContent, "hidden"));
