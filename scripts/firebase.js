const form = document.getElementById("add-salon");
const phoneform = document.getElementById("phone_form");
const userSignup= document.querySelector(".user-signup1");
form.addEventListener("submit", (e) => {
    userSignup.classList.remove('hide');
 var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
  e.preventDefault();
  db.collection("salons").add({
    full_name: form.full_name.value,
    email: form.email.value,
    salon_name: form.salonname.value,
    phone_number: phoneform.phone_number.value,
    notifications: form.notifications.value,
    password: form.password.value
  });
});
userSignup.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("modal-close") || target === userSignup) {
    userSignup.classList.add("hide");
  }
});

var modal = document.querySelector(".user-signup");
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    userSignup.classList.add("hide");
  }
});

const masterForm = document.getElementById("add-master");
masterForm.addEventListener("submit", (event) => {
  var notifications = document.getElementById("notification2");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
  event.preventDefault();
  db.collection("masters").add({
    full_name: masterForm.full_name.value,
    email: masterForm.email.value,
    salon_name: masterForm.salonname.value,
    phone_number: phoneform.phone_number.value,
    password: masterForm.password.value,
    notifications: masterForm.notifications.value
  });
  masterForm.reset();
});