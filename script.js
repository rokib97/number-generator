function getInputValue(inputId) {
  const inputNumber = document.getElementById(inputId);
  const inputValue = parseFloat(inputNumber.value);
  inputNumber.value = "";
  return inputValue;
}
function calculate(inputValue, isDouble) {
  const outputElement = document.getElementById("output-field");
  const outputValue = parseFloat(outputElement.innerText);
  if (isDouble == true) {
    outputElement.innerText = inputValue * 2;
  } else {
    outputElement.innerText = inputValue * 3;
  }
}

function colorRGBGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
function setRGB() {
  const body = document.getElementById("root");
  const bgColor = colorRGBGenerator();
  body.style.backgroundColor = bgColor;
}

document.getElementById("double-btn").addEventListener("click", function () {
  setRGB();
  const inputValue = getInputValue("input-field");
  if (isNaN(inputValue) == false) {
    calculate(inputValue, true);
  } else {
    alert("Please type a Number");
  }

  /* const inputNumber = document.getElementById("input-field");
  const inputValue = parseFloat(inputNumber.value);
  inputNumber.value = ""; */

  /*  const outputElement = document.getElementById("output-field");
  const outputValue = parseFloat(outputElement.innerText);
  outputElement.innerText = inputValue * 2; */
});
document.getElementById("triple-btn").addEventListener("click", function () {
  setRGB();
  const inputValue = getInputValue("input-field");
  if (isNaN(inputValue) == false) {
    calculate(inputValue, false);
  } else {
    alert("Please type a Number");
  }
  /* const inputNumber = document.getElementById("input-field");
  const inputValue = parseFloat(inputNumber.value);
  inputNumber.value = ""; */

  /* const outputElement = document.getElementById("output-field");
  const outputValue = parseFloat(outputElement.innerText);
  outputElement.innerText = inputValue * 3; */
});
