const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  if (
    formElem.elements.email.value === "" ||
    formElem.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    userData.email = formElem.elements.email.value.trim();
    userData.password = formElem.elements.password.value.trim();
  }
  console.log(userData);

  formElem.reset();
});
