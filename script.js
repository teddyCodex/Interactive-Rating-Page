let buttons = document.querySelectorAll("#num ul button");
document.getElementById("tot-num").textContent = buttons.length;

let numSel = document.getElementById("num-sel");
let numbers = [1, 2, 3, 4, 5];

function one() {
  numSel.textContent = numbers[0];
}
function two() {
  numSel.textContent = numbers[1];
}
function three() {
  numSel.textContent = numbers[2];
}
function four() {
  numSel.textContent = numbers[3];
}
function five() {
  numSel.textContent = numbers[4];
}

document.getElementById("submit").addEventListener("click", thankyou);
function thankyou() {
  document.getElementById("first-contain").classList.toggle("hidden");
  document.getElementById("second-contain").classList.remove("hidden");
}
