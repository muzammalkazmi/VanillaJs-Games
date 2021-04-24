//Accessing DOM Elements
const holdOne = document.getElementById('score--0')
const holdTwo = document.getElementById('score--1')
var runningOne = document.getElementById('current--0')
var runningTwo = document.getElementById('current--1')
var rolBtn = document.getElementById('rolBtn')
const showDice = document.querySelector('.dice')
rolBtn.addEventListener('click', init)
var roundScore, activePlayer;
roundScore = 1
    // var activePlayer = 1
document.getElementById('score-0').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('score--1').textContent = '0'
document.getElementById('current-1').textContent = '0'

function init() {
    var digit = Math.floor(Math.random() * 6) + 1
    console.log(digit)
    showDice.src = `dice-${digit}.png`;
    //if score is not equal to 1
    if (digit !== 1) {
        //add the score 
        console.log(digit)
        roundScore += digit
        console.log(roundScore)
        document.getElementById('current-0').textContent = roundScore
    } else {

    }

}
init()