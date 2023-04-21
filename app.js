const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultnum = document.getElementById("result");

function plus() {
  const number1 = parseInt(number1Input.value);
  const number2 = parseInt(number2Input.value);
  const result = number1 + number2;
  resultnum.textContent = "Результат: " + result;
}

function minus() {
  const number1 = parseInt(number1Input.value);
  const number2 = parseInt(number2Input.value);
  const result = number1 - number2;
  resultnum.textContent = "Результат: " + result;
}

const aple = document.querySelector("button:nth-of-type(1)");
aple.addEventListener("click", plus);

const sub = document.querySelector("button:nth-of-type(2)");
sub.addEventListener("click", minus);
