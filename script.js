const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    
    if (firstname.value === "") {
        setErrorFor(firstname, `First Name cannot be empty`);
    }
     if (!lastname.value) {
       setErrorFor(lastname, `Last Name cannot be empty`);
     }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');   
    small.textContent = message;
}
