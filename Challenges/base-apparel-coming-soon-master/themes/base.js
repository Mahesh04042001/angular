const formEmail = document.myForm.email;
function checkForm() {
  if (
    formEmail.value.indexOf("@") == -1 ||
    formEmail.value.indexOf(".") == -1
  ) {
    alert("please enter  a valid e-mail address.");
    formEmail.focus();
  }
}
