function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElem = document.querySelector("body");
const buttonElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");
buttonElem.addEventListener("click", () => {
  spanElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = spanElem.textContent;
});
