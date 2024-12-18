let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let button = document.querySelector("#button");

let result = document.querySelector("#result");
let bmiResult = document.querySelector("#bmiResult");

button.addEventListener("click", function () {
  let newHeight =parseFloat(height.value / 100);
  newHeight = newHeight * newHeight;
  let newWeight =parseFloat(weight.value);
  let bmi = newWeight / newHeight;
  bmiResult.textContent = bmi.toFixed(2);
  result.style.display = "block";
  console.log(bmi);
  if (bmi < 18.5) {
    result.style.color = "yellow";
  } else if (bmi < 24.9) {
    result.style.color = "green";
  } else if (bmi < 29.9) {
    result.style.color = "tomato";
  } else {
    result.style.color = "red";
  }
});

let form = document.querySelector("#form");
form.addEventListener("click", function (e) {
  e.preventDefault();
});
