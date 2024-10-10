'use strict';
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const display = function (message, value) {
    document.querySelector(message).textContent = value;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess);

    if (!guess) {
        display('.message', 'input a number')

    } else if (guess > 20) {
        display('.message', 'please input between 1 to 20')

    } else if (guess !== number) {
        document.querySelector('body').style.backgroundColor = '#222'

        if (score > 1) {
            display('.message', guess > number ? 'TOO HIGH' : 'TOO LOW')
            score--;
            display('.score', score)
        } else {
            display('.message', 'LOST THE GAME!')
            display('.score', 0)
        }



    } else if (guess === number) {
        display('.message', 'CORRECT ANSWER')
        document.querySelector('.number').textContent = number
        display('.number', number)
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            display('.highscore', score)
        }


    }

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    display('.score', score)
    number = Math.trunc(Math.random() * 20) + 1;
    display('.number', "?")
    display('.message', 'Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';

})