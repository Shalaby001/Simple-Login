

document.getElementById('signUpBtn').addEventListener('click', function () {
  document.querySelector('.layer').classList.replace('normal', 'translated');
});


document.getElementById('loginBtn').addEventListener('click', function () {
  document.querySelector('.layer').classList.replace('translated', 'normal');
});


////////////////////////////         SIgn up          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var signUpForm = document.getElementById('signUpForm');
var signUpUserName = document.getElementById('signUpName');
var userNameAlert = document.getElementById('useralert');
var signUpUserEmail = document.getElementById('signupEmail');
var userEmailAlert = document.getElementById("emailAlert");
var signUpUserPass = document.getElementById('signupPassword');
var userPassAlert = document.getElementById('passAlert');
var successAlert = document.getElementById('successAlert');
var userExistAlert = document.getElementById('existsAlert');
var users = [];

// Load users from localStorage if available
if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

// Event listener for form submission
signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var isNameValid = nameValidating();
  var isEmailValid = emailValidating();
  var isPassValid = passValidating();

  if (isNameValid && isEmailValid && isPassValid) {
    successAlert.classList.replace('d-none', 'd-block');
    userInfo();
  
    
    
  } else {
    successAlert.classList.replace('d-block', 'd-none');
  }
});

// Validation functions
function nameValidating() {
  var pattern = /^[a-zA-Z\s]{3,}$/;
  if (pattern.test(signUpUserName.value)) {
    userNameAlert.classList.replace('d-block', 'd-none');
    return true;
  } else {
    userNameAlert.classList.replace('d-none', 'd-block');
    return false;
  }
}

function emailValidating() {
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (pattern.test(signUpUserEmail.value)) {
    userEmailAlert.classList.replace('d-block', 'd-none');
    return true;
  } else {
    userEmailAlert.classList.replace('d-none', 'd-block');
    return false;
  }
}

function passValidating() {
  var pattern = /^.{6,}$/;
  if (pattern.test(signUpUserPass.value)) {
    userPassAlert.classList.replace('d-block', 'd-none');
    return true;
  } else {
    userPassAlert.classList.replace('d-none', 'd-block');
    return false;
  }
}


function clearInput() {
  signUpUserName.value = '';
  signUpUserEmail.value = '';
  signUpUserPass.value = '';
}


function userInfo() {
  var newUser = {
    username: signUpUserName.value,
    email: signUpUserEmail.value,
    password: signUpUserPass.value
  };

  if (userExist(newUser)) {
    userExistAlert.classList.replace('d-none', 'd-block');
    successAlert.classList.replace('d-block', 'd-none');
  } else {
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    clearInput();
    userExistAlert.classList.replace('d-block', 'd-none');
  }
}


function userExist(user) {
  return users.some(function(existingUser) {
    return existingUser.email.toLowerCase() === user.email.toLowerCase();
  });
}

////////////////////////////          End Of SIgn up   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



////////////////////////////       SIgn in   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var signInForm = document.getElementById('signInForm');
var loginUserEmail = document.getElementById('loginEmail');
var loginUserPass = document.getElementById('loginPassword');
var loginSuccessAlert = document.getElementById('loginSuccessAlert');
var loginFailureAlert = document.getElementById('loginFailureAlert');

signInForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var userData = {
    email: loginUserEmail.value,
    password: loginUserPass.value
  };
  
  var isValid = isLoginValid(userData);

  if (isValid) {
    window.location.href = 'welcome.html';
  } else {
    loginSuccessAlert.classList.replace('d-block', 'd-none');
    loginFailureAlert.classList.replace('d-none', 'd-block');
  }
});

function isLoginValid(userData) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === userData.email.toLowerCase() && users[i].password === userData.password) {
      localStorage.setItem('USerName',users[i].username);
      return true;
    }
  }
  return false;
}