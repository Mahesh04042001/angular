function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    const message = "Please provide a valid email address!";
    document.getElementById("msg").innerHTML = message;
    setTimeout(() => {
      emailMessage.style.display = "none";
    }, 1000);
    document.myForm.email.focus();
    event.preventDefault();
    return false;
  }
}
