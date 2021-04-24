//Accessing DOM Elements
const holdOne = document.getElementById('score--0')
const holdTwo = document.getElementById('score--1')
var runningOne = document.getElementById('current--0')
var runningTwo = document.getElementById('current--1')
var rolBtn = document.getElementById('rolBtn')
const holdBtn = document.querySelector('.holdBtn')
const showDice = document.querySelector('.dice')
rolBtn.addEventListener('click', init)
var roundScore, activePlayer, scores;
roundScore = 0;
activePlayer = 0;
scores = [0, 0]
document.getElementById('score-0').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.querySelector('.dice').style.display = 'none'

function init() {
    var digit = Math.floor(Math.random() * 6) + 1
    console.log(digit)
        //show the dice
    showDice.src = `dice-${digit}.png`;
    document.querySelector('.dice').style.display = 'block'
        //if score is not equal to 1
    if (digit !== 1) {
        //add the score 
        roundScore += digit
        document.getElementById('current-' + activePlayer).textContent = roundScore
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent = 0
        document.getElementById('current-1').textContent = 0
        roundScore = 0
    }

}

holdBtn.addEventListener('click', function() {
    //update the global score as per current score
    scores[activePlayer] += roundScore
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

    //toggle players
})
init()