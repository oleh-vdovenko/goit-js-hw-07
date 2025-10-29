const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    formElem.elements.email.value === "" ||
    formElem.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
  }
  const userData = {
    email: formElem.elements.email.value.trim(),
    password: formElem.elements.password.value.trim(),
  };
  console.log(userData);
  formElem.reset();
});
