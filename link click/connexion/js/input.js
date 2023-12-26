let nameInput1 = document.getElementById("pseudo");
function validateUsername1(){
    let nameError1 = document.getElementById("usernameError1");
    let nameRegex1 = /^[a-zA-Z\-]+$/;
    if (nameRegex1.test(nameInput1.value)){
        nameError1.textContent = '';
    }else{
        nameError1.textContent = "username is not valid."
    }
}

nameInput1.addEventListener('input',validateUsername1);


let passwordInput1 = document.getElementById("mdp");
function validatePassword1(){
    let passwordError1 = document.getElementById("mdpError1");
    let passwordRegex1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (passwordRegex1.test(passwordInput1.value) && passwordInput1.value.length >= 8){
        passwordError1.textContent = '';
    }else{
        passwordError1.textContent = "password is not valid."
    }
}

passwordInput1.addEventListener('input',validatePassword1);

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username1 = document.getElementById("pseudo");
  let password1 = document.getElementById("mdp");

  if (username1.value == "" || password1.value == "") {
    alert("ensure you input a value in all fields!");
  } else {
    alert("welcome!");
    username1.value = "";
    password1.value = "";
  }
});





let nameInput = document.getElementById("pseudo2");
function validateUsername(){
    let nameError = document.getElementById("usernameError");
    let nameRegex = /^[a-zA-Z\-]+$/;
    if (nameRegex.test(nameInput.value)){
        nameError.textContent = '';
    }else{
        nameError.textContent = "your username is not valid."
    }
}

nameInput.addEventListener('input',validateUsername);


let passwordInput = document.getElementById("mdp2");
function validatePassword(){
    let passwordError = document.getElementById("mdpError");
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8){
        passwordError.textContent = '';
    }else{
        passwordError.textContent = "password has to contain at least one lowercase character, one uppercase character, a special character, and 8 lenght characters."
    }
}

passwordInput.addEventListener('input',validatePassword);


let mailInput = document.getElementById("email2");
function validateEmail(){
    let mailError = document.getElementById("emailError");
    let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailRegex.test(mailInput.value)){
        mailError.textContent = '';
    }else{
        mailError.textContent = "you have entered an invalid email address."
    }
}

mailInput.addEventListener('input',validateEmail);


let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("pseudo2");
  let email = document.getElementById("email2");
  let password = document.getElementById("mdp2");

  if (username.value == "" || password.value == "" || email.value == "") {
    alert("ensure you input a value in all fields.");
  } else {
    alert("your accound has been created !");
    username.value = "";
    email.value = "";
    password.value = "";
  }
});
