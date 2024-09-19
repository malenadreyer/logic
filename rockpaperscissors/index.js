"use strict";

const options = ['rock','paper','scissors'];

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const winText = document.getElementById('win');
const loseText = document.getElementById('lose');
const drawText = document.getElementById('draw');
const buttons = document.getElementById('buttons');

function startGame(playerChoice) {
    buttons.classList.add('disabled');

    player1.classList.add('shake');
    player2.classList.add('shake');

    const randomChoice = options[Math.floor(Math.random() * options.length)];

    // Fik denne kode fra en random codepen jeg fandt da jeg googlede mig frem.
    setTimeout(() => {
        player1.classList.remove('shake');
        player2.classList.remove('shake');

        player1.className = `player ${playerChoice}`;
        player2.className = `player ${randomChoice}`;

        setTimeout(() => {
            buttons.classList.remove('disabled');
          }, 1000);
        }, 1800);
    }
// virker ikke, forstår ikke helt. 
    function showResult(playerChoice, computerChoice) {

        winText.classList.add('hidden');
        loseText.classList.add('hidden');
        drawText.classList.add('hidden');
    
        if (playerChoice === computerChoice) {
            
            drawText.classList.remove('hidden');
         } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
          ) {
            winText.classList.remove('hidden');
        } else {
            loseText.classList.remove('hidden');
        }
    }


    document.querySelector('button.rock').addEventListener('click', () => startGame('rock'));
  document.querySelector('button.paper').addEventListener('click', () => startGame('paper'));
  document.querySelector('button.scissors').addEventListener('click', () => startGame('scissors'));
    