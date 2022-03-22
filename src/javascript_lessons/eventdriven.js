const btn1 = document.querySelector(".btn1");
const coolbutton = document.querySelector(".btn2");

function handleClick() {
  console.log("😊 IT GOT CLICKED!!!");
}
btn1.addEventListener("click", handleClick);
const hoorey = () => console.log("HOOREY!");
coolbutton.addEventListener("click", hoorey);
btn1.removeEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy");
// function handleBuyButtonClick() {
//   console.log("buy");
// }
function handleBuyButtonClick(event) {
  console.log("buy");
  const button = event.target; //refernce to the Dom element
  console.log(button.textContent);
  console.log("price:" + parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  //   event.stopPropagation();
}
buyButtons.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", handleBuyButtonClick);
});
//mouse hover event
const photoEl = document.querySelector(".photo");
photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
window.addEventListener(
  "click",
  function (e) {
    console.log("window is clicked");
    e.stopPropagation();
    console.log("bubling:" + e.bubbles);
  },
  { capture: true }
);
