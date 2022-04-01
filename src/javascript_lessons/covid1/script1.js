var rIndex,
  table = document.getElementById("table");
// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    dob = document.getElementById("dob").value,
    gender = document.getElementById("gender").value,
    city = document.getElementById("city").value,
    time = document.getElementById("time").value,
    lab = document.getElementById("lab").value,
    report = document.getElementById("report").value,
    result = document.getElementById("result").value,
    aadhar = document.getElementById("aadhar").value;
  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  } else if (lname === "") {
    alert("Last Name Connot Be Empty");
    isEmpty = true;
  } else if (dob === "") {
    alert("date of birth Connot Be Empty");
    isEmpty = true;
  } else if (gender === "") {
    alert("Gender Connot Be Empty");
    isEmpty = true;
  } else if (city === "") {
    alert("City Connot Be Empty");
    isEmpty = true;
  } else if (time === "") {
    alert("Time Connot Be Empty");
    isEmpty = true;
  } else if (lab === "") {
    alert("Lab Connot Be Empty");
    isEmpty = true;
  } else if (report === "") {
    alert("Report Connot Be Empty");
    isEmpty = true;
  } else if (result === "") {
    alert("Result Connot Be Empty");
    isEmpty = true;
  } else if (aadhar === "") {
    alert("Aadhar Connot Be Empty");
    isEmpty = true;
  }
  return isEmpty;
}
