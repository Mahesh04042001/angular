const error1 = document.querySelector(".icon-error");
const msg1 = document.querySelector("#msg1");
const message = "Please provide a email address!";
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    msg1.style.display = "block";
    error1.style.display = "none";
    document.getElementById("msg").innerHTML = message;
    msg.style.display = "none";
    document.getElementById("mail-id").style.borderColor = "green";
    return true;
  } else {
    document.getElementById("msg").innerHTML = message;
    error1.style.display = "block";
    msg.style.display = "block";
    msg1.style.display = "none";
    document.getElementById("mail-id").style.borderColor = "red";
    document.myForm.email.focus();
  }
}
