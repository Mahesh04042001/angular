var input;
var input1 = document.getElementById("arrow1");
var input2 = document.getElementById("arrow2");
var input3 = document.getElementById("arrow3");
var input4 = document.getElementById("arrow4");

function myFunction(input) {
  if (input === "arrow1") {
    var x = document.getElementById("ans1");
    if (x.style.display === "none") {
      x.style.display = "flex";
      input1.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      input1.style.transform = "rotate(360deg)";
    }
  } else if (input === "arrow2") {
    var x = document.getElementById("ans2");
    if (x.style.display === "none") {
      x.style.display = "flex";
      input2.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      input2.style.transform = "rotate(360deg)";
    }
  } else if (input === "arrow3") {
    var x = document.getElementById("ans3");
    if (x.style.display === "none") {
      x.style.display = "flex";
      input3.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      input3.style.transform = "rotate(360deg)";
    }
  } else if (input === "arrow4") {
    var x = document.getElementById("ans4");
    if (x.style.display === "none") {
      x.style.display = "flex";
      input4.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      input4.style.transform = "rotate(360deg)";
    }
  }
}
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    const message = "Thankyou for your contribution";
    document.getElementById("msg1").innerHTML = message;
    document.getElementById("msg1").style.display = "block";
    document.getElementById("mail-id").style.borderColor = "green";
    window.onwaiting(event);
    return true;
  } else {
    document.getElementById("msg").style.display = "block";
    document.getElementById("error").style.display = "block";
    document.getElementById("mail-id").style.borderColor = "red";
    document.myForm.email.focus();
    event.preventDefault();
    return false;
  }
}

function bookmark() {
  document.getElementsByClassName("slider")[0].classList.add("active");
  document.getElementsByClassName("slider")[1].classList.remove("active");
  document.getElementsByClassName("slider")[2].classList.remove("active");
}
function search() {
  document.getElementsByClassName("slider")[0].classList.remove("active");
  document.getElementsByClassName("slider")[1].classList.add("active");
  document.getElementsByClassName("slider")[2].classList.remove("active");
}
function share() {
  document.getElementsByClassName("slider")[0].classList.remove("active");
  document.getElementsByClassName("slider")[1].classList.remove("active");
  document.getElementsByClassName("slider")[2].classList.add("active");
}
