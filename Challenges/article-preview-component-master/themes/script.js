var myInput = document.getElementById("share");
myInput.onfocus = function () {
  document.getElementById("popup").style.display = "flex";
};
myInput.onblur = function () {
  document.getElementById("popup").style.display = "none";
};
