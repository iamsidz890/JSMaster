'use strict';

// display message no number if there is no number in input
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  //

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a number .....';
  } else if (secretNumber == guess) {
    document.querySelector('.message').textContent =
      'You did it..you son Of a bitch..you did it...';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess higher ....';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost...';
    }
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess lower....';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ....';
    }
  }

  //   console.log(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
