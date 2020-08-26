const form = document.getElementById("add-salon");
const phoneform = document.getElementById("phone_form");
const userSignup= document.querySelector(".user-signup");
form.addEventListener("submit", (e) => {
    userSignup.classList.remove('hide');
 var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
  e.preventDefault();
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
window.onload=function(){
    render();
};
function render(){
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier("recaptcha-container");
    recaptchaVerifier.render();
}
function phoneAuth(){
    var number=document.getElementById('number').value;
    firebase.auth().SignInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Код отправлен")
    });
}
function codeverify(){
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function(result){
          db.collection("salons").add({
    full_name: form.full_name.value,
    email: form.email.value,
    salon_name: form.salonname.value,
    phone_number: phoneform.phone_number.value,
    notifications: form.notifications.value,
    password: form.password.value
  });
        var user=result.user;
        console.log(user);
    }).catch(function(error){
        alert("Неверный код");
    });
}

});



