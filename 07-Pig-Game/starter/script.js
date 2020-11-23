'use strict';
//Selecting elements.....
const score0El = document.querySelector('#score--0'); //El for element
const score1El = document.getElementById('score--1'); //relatively fast than score 0
const diceEl = document.querySelector('.dice'); //img tag haii ye
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// initial condn

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
//hide dice
diceEl.classList.add('hidden');

//roling dice function

btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for a rolled  1 if yes switch player
  if (dice !== 1){
         currentScore+=dice;
         
  }else{

  }
});
