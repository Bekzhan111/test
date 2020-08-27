const form = document.getElementById("add-salon");
const phoneform = document.getElementById("phone_form");
const userSignup = document.querySelector(".user-signup1");

window.onload = function () {
  render();
};
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
function phoneAuth() {
  //get the number
  var number = document.getElementById("phone_number").value;
  //phone number authentication function of firebase
  //it takes two parameter first one is number,,,second one is recaptcha
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      //s is in lowercase
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("Message sent");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function codeverify() {
  var code = document.getElementById("verificationCode").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      console.log(user);
    })
    .catch(function (error) {
      alert(error.message);
    });
    
  db.collection("salons").add({
    full_name: fullName,
    email: email,
    salon_name: salonname,
    phone_number: phoneform.phone_number.value,
    notifications: notifications,
    password: password,
  });
  e.preventDefault();
};

form.addEventListener("submit", (e) => {
  userSignup.classList.remove("hide");
  var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }

  var fullName = document.getelementbyName(full_name).value;
  var salonname = document.getelementbyName(salonname).value;
  var email = document.getelementbyName(email).value;
  var password = document.getelementbyName(password).value;
  var notifications = document.getelementbyName(notifications).value;


  e.preventDefault();
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      userSignup.classList.add("hide");
    }
  });
}
  userSignup.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("modal-close") || target === userSignup) {
      userSignup.classList.add("hide");
    }
  });
