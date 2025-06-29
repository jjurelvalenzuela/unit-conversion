/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lengthResult = document.querySelector("#length-result");
const volumeResult = document.querySelector("#volume-result");
const massResult = document.querySelector("#mass-result");

convertBtn.addEventListener("click", function () {
  const input = inputEl.value;

  if (isNaN(input) || input <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  const result = convertAll(input);

  lengthResult.textContent = `${input} meters = ${result.feet} feet | ${input} feet = ${result.meters} meters`;
  volumeResult.textContent = `${input} liters = ${result.gallons} gallons | ${input} gallons = ${result.liters} liters`;
  massResult.textContent = `${input} kilos = ${result.pounds} pounds | ${input} pounds = ${result.kilos} kilos`;
});

function convertAll(input) {
  return {
    meters: (input / 3.281).toFixed(3),
    feet: (input * 3.281).toFixed(3),
    liters: (input / 0.264).toFixed(3),
    gallons: (input * 0.264).toFixed(3),
    kilos: (input / 2.204).toFixed(3),
    pounds: (input * 2.204).toFixed(3),
  };
}
