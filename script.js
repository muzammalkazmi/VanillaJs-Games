//Accessing DOM Elements
const totalOne = document.getElementById('score--0').innerText
const totalTwo = document.getElementById('score--1').innerText
const runningOne = document.getElementById('current--0').innerText
const runningTwo = document.getElementById('current--1').innerText
var rolBtn = document.getElementById('rolBtn')
rolBtn.addEventListener('click', init)
init()

function init() {
    totalOne.innerText = 0;
    totalTwo.innerText = 0;
    runningOne.innerText = 0;
    runningTwo.innerText = 0
    var digit = Math.floor(Math.random() * 6) + 1
    console.log(digit)
}