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
      db.collection("salons").add({
        full_name: form.full_Name.value,
        email: form.email.value,
        salon_name: salonname.value,
        phone_number: phoneform.phone_number.value,
        notifications: form.notifications.value,
        password: form.password.value,
      });
    })
    .catch(function (error) {
      alert(error.message);
    });

  e.preventDefault();
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      userSignup.classList.add("hide");
    }
  });
}

form.addEventListener("submit", (e) => {
  userSignup.classList.remove("hide");
  e.preventDefault();
  var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
});