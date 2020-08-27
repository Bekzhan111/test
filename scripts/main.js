 const salons = document.querySelector(".salons1");
const masters = document.querySelector(".masters1");
const salonform = document.querySelector(".salon");
const masterForm = document.querySelector(".master");

salons.addEventListener("click", () => {
salons.classList.add("isactive");
  salonform.classList.remove("hide");
  masters.classList.remove("isactive");
  masterForm.classList.add("hide");
});

masters.addEventListener("click", () => {
  masters.classList.add("isactive");
  masterForm.classList.remove("hide");
  salons.classList.remove("isactive");
  salonform.classList.add("hide");
});
const db = firebase.firestore();
const form = document.getElementById("add-salon");
const masterform = document.getElementById("add-master");
const phoneform = document.getElementById("phone_form");
const userSignup = document.querySelector(".user-signup1");

form.addEventListener("submit", (e) => {
  userSignup.classList.remove("hide");
  e.preventDefault();
});
masterform.addEventListener("submit", (o) => {
  userSignup.classList.remove("hide");
  o.preventDefault();
});
   window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      userSignup.classList.add("hide");
    }
  });
userSignup.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("modal-close") || target === userSignup) {
    userSignup.classList.add("hide");
  }
});

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
      alert("Код отправлен");
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
   if(masterForm.classlist.contains("hide")){
      alert("Вы зарегистрировались");
      var notifications = document.getElementById("notification1");
      if (notifications.checked) {
        notifications.value = true;
      } else {
        notifications.value = false;
      };
      db.collection("salons").add({
        full_name: form.full_name.value,
        email: form.email.value,
        salon_name: form.salonname.value,
        phone_number: phoneform.phone_number.value,
        notifications: notifications.value,
        password: form.password.value
      });
      userSignup.classList.add("hide");
   }
   else{
         alert("Вы зарегистрировались");
      var notification = document.getElementById("notification2");
      if (notification.checked) {
        notification.value = true;
      } else {
        notification.value = false;
      };
      db.collection("masters").add({
        full_name: masterform.full_name.value,
        email: masterform.email.value,
        salon_name: masterform.salonname.value,
        phone_number: phoneform.phone_number.value,
        notifications: notification.value,
        password: masterform.password.value
      });
      userSignup.classList.add("hide");
   };
    })
    .catch(function (error) {
      alert(error.message);
    });
}
