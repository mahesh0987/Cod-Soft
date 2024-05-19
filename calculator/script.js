let currentValue = "";

function appendToDisplay(value) {
  currentValue += value;
  document.getElementById("result").value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  document.getElementById("result").value = "";
}

function removeLastDigit() {
  currentValue = currentValue.slice(0, -1);
  document.getElementById("result").value = currentValue;
}

function calculateResult() {
  try {
    const result = eval(currentValue);
    currentValue = result.toString();
    document.getElementById("result").value = currentValue;
  } catch (error) {
    clearDisplay();
    alert("Invalid expression");
  }
}