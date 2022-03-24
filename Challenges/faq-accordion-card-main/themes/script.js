var input;
var input1 = document.getElementById("arrow1");
var input2 = document.getElementById("arrow2");
var input3 = document.getElementById("arrow3");
var input4 = document.getElementById("arrow4");
var input5 = document.getElementById("arrow5");
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
  } else {
    var x = document.getElementById("ans5");
    if (x.style.display === "none") {
      x.style.display = "flex";
      input5.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      input5.style.transform = "rotate(360deg)";
    }
  }
}
