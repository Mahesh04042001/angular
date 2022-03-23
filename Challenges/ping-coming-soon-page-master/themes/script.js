function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    const message = "Please provide a email address!";
    document.getElementById("msg").innerHTML = message;
    document.myForm.email.focus();
    event.preventDefault();
    return false;
  }
}
