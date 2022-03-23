function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    const message = "Thankyou for your contribution";
    document.getElementById("msg1").innerHTML = message;
    document.getElementById("msg1").style.display = "block";
    document.getElementById("msg").style.display = "none";
    event.preventDefault();

    return true;
  } else {
    const message = "Please provide a email address!";
    document.getElementById("msg").innerHTML = message;
    document.getElementById("msg").style.display = "block";
    document.getElementById("msg1").style.display = "none";
    document.myForm.email.focus();
    event.preventDefault();
    return false;
  }
}
