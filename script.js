/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const getInput = document.querySelector("#inputEl");
const lengthEl = document.querySelector("#lengthText");
const volumeEl = document.querySelector("#volumeText");
const massEl = document.querySelector("#massText");


function convertInput () {
    const meterConverter = getInput.value * 3.281; 
    const feetConverter = getInput.value / 3.281;
    const literConverter = getInput.value * 0.264;
    const gallonConverter = getInput.value / 0.2264;
    const kiloConverter = getInput.value * 2.204;
    const poundConverter = getInput.value / 2.204;

    lengthEl.innerHTML = `${getInput.value} meters = ${meterConverter.toFixed(2)} feet | ${getInput.value} feet = ${feetConverter.toFixed(2)} meters`;

    volumeEl.innerHTML = `${getInput.value} liters = ${literConverter.toFixed(2)} gallons | ${getInput.value} gallons = ${gallonConverter.toFixed(2)} liters`;

    massEl.innerHTML = `${getInput.value} kilos = ${kiloConverter.toFixed(2)} pounds | ${getInput.value} pounds = ${poundConverter.toFixed(2)} kilos`;

}




