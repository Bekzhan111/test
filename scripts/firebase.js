const submitbtn = document.querySelector(".const salon1form = document.querySelector(".salon");");
submitbtn.addEventListener("click", () =>{
const salon1form = document.querySelector(".salon");
const master1form = document.querySelector(".master");

if(master1form.classList.contains('hide')){
const form = document.getElementById("add-salon");
  var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  };
    const phone_number = document.querySelector(".firebaseui-input");
  db.collection("salons").add({
    full_name: form.full_name.value,
    email: form.email.value,
    salon_name: form.salonname.value,
    phone_number: phone_number.value,
    notifications: form.notifications.value,
    password: form.password.value
  });
  form.reset();
}
else{
  const masterForm = document.getElementById("add-master");
  var notifications = document.getElementById("notification2");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  };
    const phone_number = document.querySelector(".firebaseui-input");
  db.collection("masters").add({
    full_name: masterForm.full_name.value,
    email: masterForm.email.value,
    salon_name: masterForm.salonname.value,
    phone_number: masterForm.phone_number.value,
    password: masterForm.password.value,
    notifications: masterForm.notifications.value
  });
  masterForm.reset();
};
    } );