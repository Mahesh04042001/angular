let checkBox = document.querySelector("#toggle");
let monthly = document.querySelectorAll(".amount1-month");
let yearly = document.querySelectorAll(".amount1-annual");
checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    yearly.forEach((amount) => (amount.style.display = "none"));
    monthly.forEach((amount) => (amount.style.display = "flex"));
  } else {
    yearly.forEach((amount) => (amount.style.display = "flex"));
    monthly.forEach((amount) => (amount.style.display = "none"));
  }
});
