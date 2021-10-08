"use strict";
const totalParagraph = document.querySelector(".total-paragraph");
const colaButton = document.querySelector(".cola");
let totalCounter = 0;
const vendingMachineButtons = document.querySelectorAll(".button");

colaButton.addEventListener("click", () => {
  totalCounter += 2;
  totalParagraph.textContent = `Total:$${totalCounter}.00`;
  console.dir(colaButton);
});

vendingMachineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.getAttribute("data-amount");
    totalCounter += parseInt(amount);
    totalParagraph.textContent = `Total:$${totalCounter}.00`;
    console.dir(colaButton);
  });
});
//----------------------------------------------------------

const moneyForm = document.querySelector(".money-form");
const coinContainer = document.querySelector(".coin-container");
moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const count = document.querySelector("#count").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", type);
    coinContainer.append(newCoin);
  }
});

//-----------------------------------------
const lightBulb = document.querySelector(".light-bulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");
const lightSwitches = document.querySelector(".switch");

onSwitch.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});

offSwitch.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleSwitch.addEventListener("click", () => {
  if (lightBulb.classList.contains("yellow")) {
    lightBulb.classList.remove("yellow");
  } else {
    lightBulb.classList.add("yellow");
  }

  // lightBult.classList.toggle("yellow")
});

endSwitch.addEventListener("click", () => {
  lightBulb.remove();
  // lightBulb.style.display=`none`;
  lightSwitches.forEach((item) => {
    console.dir(item);
    item.disabled = true;
  });
});
