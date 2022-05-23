const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();

  // FirstName
  if (firstname.value === "") {
    addError(firstname, `First Name cannot be empty`);
  } else {
    removeError(firstname);
  }

  // LastName
  if (!lastname.value) {
    addError(lastname, `Last Name cannot be empty`);
  } else {
    removeError(lastname);
  }

  // Email
  if (email === "") {
    addError(email, "Email cannot be empty");
  } else if (!isValid(emailValue)) {
    addError(email, "Email is not valid");
  } else {
    removeError(email);
  }

  //Password
  if (!pass.value) {
    addError(pass, "Password cannot be empty");
  } else if (passValue.length < 8) {
    addError(pass, "IT'S TOO SHORT NIGGA");
  } else {
    removeError(pass);
  }
}

function addError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}
function removeError(input) {
  const formControl = input.parentNode;
  formControl.classList.remove("error");
}

function isValid(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
