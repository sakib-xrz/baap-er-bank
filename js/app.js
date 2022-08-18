function login() {
  const logInBtn = document.getElementById("login-btn");
  let userEmail = document.getElementById("user-email");
  let userPassword = document.getElementById("user-password");

  let email = userEmail.value;
  let password = userPassword.value;
  if (email == "sakibxrz21@gmail.com" && password == "Sakib@123") {
    window.location.href = "bank.html";
  } else {
    alert("Incorrect username or password");
  }
}

function getInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldStringValue = inputField.value;
  const inputFieldNumber = parseFloat(inputFieldStringValue);
  inputField.value = "";
  return inputFieldNumber;
}

function getPreviousValue(id) {
  const previousValue = document.getElementById(id);
  const previousValueString = previousValue.innerText;
  const previousValueNumber = parseFloat(previousValueString);
  return previousValueNumber;
}

function setCurrentValue(sectionId, value) {
  const section = document.getElementById(sectionId);
  section.innerText = value;
}

function logout() {
  window.location.href = "index.html";
}
