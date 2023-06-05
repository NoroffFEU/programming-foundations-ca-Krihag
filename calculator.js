// Selectors
const allBtns = document.querySelectorAll(".btns-row-container input");
const displayBtns = document.getElementsByClassName("calc-btns");

const calcDisplay = document.querySelector(".calc-display-container input");
const calcEqual = document.getElementById("calc-equal");
const allClear = document.getElementById("all-clear");
const pwrButton = document.getElementById("pwr-btn");

// Calculator Object
const calculator = {
  brand: "Simple Calc",
  model: 7,
  buttons: [],
  powered: true,

  // Equal button (check total sum)
  equalBtn: () => {
    let sum = eval(calcDisplay.value);
    if (sum == undefined) return;
    calcDisplay.value = sum;
  },

  // Display. Shows the current calculation
  display: (e) => {
    if (!calculator.powered) {
      calcDisplay.value = "Power is off";
      calcDisplay.style.textAlign = "center";
      setTimeout(() => {
        calcDisplay.value = "";
        calcDisplay.style.textAlign = "right";
      }, 2000);

      return;
    }
    calcDisplay.value += e.target.value;
  },

  // toggle power
  togglePower: () => {
    if (calculator.powered) {
      calculator.powered = false;

      setTimeout(() => {
        calcDisplay.value = "";
        calcDisplay.classList.add("power-off");
      }, 500);
    } else {
      calculator.powered = true;

      setTimeout(() => {
        calcDisplay.classList.remove("power-off");
      }, 500);
    }
  },
};

// Adding all buttons to calculator.button (object)

allBtns.forEach((btn) => calculator.buttons.push(btn.value));

//only buttons that will be seen in display (either numbers or math symbols)
for (let i = 0; i < displayBtns.length; i++)
  displayBtns[i].addEventListener("click", calculator.display);

// Equal sign button
calcEqual.addEventListener("click", calculator.equalBtn);

allClear.addEventListener("click", () => (calcDisplay.value = ""));

pwrButton.addEventListener("click", calculator.togglePower);
