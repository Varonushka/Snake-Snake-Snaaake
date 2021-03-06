import {
    onSnake,
    expandSnake
} from './Snake.js';

import {
    randomGridPosition
} from './Grid.js';

let food = getRandomFoodPosition()
const Expansion_Rate = 2;

export function update() {
    if (onSnake(food)) {
        expandSnake(Expansion_Rate)
        food = getRandomFoodPosition()
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}