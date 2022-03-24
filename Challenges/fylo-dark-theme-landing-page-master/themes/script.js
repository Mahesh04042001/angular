const message = "Please provide a valid email address!";
const message1 = "Thankyou for your contribution";
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(validRegex)) {
    document.getElementById("msg").innerHTML = message;
    document.myForm.email.focus();
    event.preventDefault();
  }
}
