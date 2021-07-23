import {
    update as updateSnake,
    draw as drawSnake,
    Snake_speed,
    getSnakeHead,
    snakeIntersection
} from './Snake.js';

import {
    update as updateFood,
    draw as drawFood
} from './Food.js';

import {
    outsideGrid
} from './Grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart the game')) {
            window.location = './'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_speed) return


    lastRenderTime = currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
