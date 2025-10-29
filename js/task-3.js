const inputElem = document.querySelector("#name-input");
inputElem.addEventListener("input", () => {
  const spanElem = document.querySelector("#name-output");
  spanElem.textContent = inputElem.value.trim();
  if (inputElem.value.trim() === "") {
    spanElem.textContent = "Anonymous";
  }
});
