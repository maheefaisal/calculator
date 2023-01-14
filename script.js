let display = document.querySelector("#display");
let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function (event) {
  let button = event.target;
  let buttonValue = button.innerText;
  if (buttonValue === "C") {
    display.innerText = "";
  } else if (buttonValue === "=") {
    display.innerText = eval(display.innerText);
  } else {
    display.innerText += buttonValue;
  }
});
