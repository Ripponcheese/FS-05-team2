const acButton = document.querySelector("#acbutton");
const profileContent = document.querySelector(".profile");
const coreContent = document.querySelector(".core-attributes");
const currentContent = document.querySelector(".current-objectives");
const preferContent = document.querySelector(".preferred-arsenal");
const behavioralContent = document.querySelector(".behavioral-matrix");
const dashboard = document.querySelector(".dashboard");
const accessContent = document.querySelector(".access-denied");

document.querySelector("#profile-button").addEventListener("click", () => {
  profileContent.style.display = "none";
  coreContent.style.display = "none";
  currentContent.style.display = "none";
  preferContent.style.display = "none";
  behavioralContent.style.display = "none";
  dashboard.style.display = "none";

  profileContent.style.display = "block";
});

document.querySelector("#core-button").addEventListener("click", () => {
  profileContent.style.display = "none";
  coreContent.style.display = "none";
  currentContent.style.display = "none";
  preferContent.style.display = "none";
  behavioralContent.style.display = "none";
  dashboard.style.display = "none";

  coreContent.style.display = "block";
});

document.querySelector("#current-button").addEventListener("click", () => {
  profileContent.style.display = "none";
  coreContent.style.display = "none";
  currentContent.style.display = "none";
  preferContent.style.display = "none";
  behavioralContent.style.display = "none";
  dashboard.style.display = "none";

  currentContent.style.display = "block";
});

document.querySelector("#prefer-button").addEventListener("click", () => {
  profileContent.style.display = "none";
  coreContent.style.display = "none";
  currentContent.style.display = "none";
  preferContent.style.display = "none";
  behavioralContent.style.display = "none";
  dashboard.style.display = "none";

  preferContent.style.display = "block";
});

document.querySelector("#behavioral-button").addEventListener("click", () => {
  profileContent.style.display = "none";
  coreContent.style.display = "none";
  currentContent.style.display = "none";
  preferContent.style.display = "none";
  behavioralContent.style.display = "none";
  dashboard.style.display = "none";

  behavioralContent.style.display = "block";
});

document.querySelector(".content-button").addEventListener("click", () => {
  accessContent.style.display = "block";
});

document.querySelector(".acbutton").addEventListener("click", () => {
  accessContent.style.display = "none";
});
