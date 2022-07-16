// GAMEBOARD

const Gameboard = (function () {
    const gameBoard = ["", "", "", "", "", "", "", "", ""]

    const getSign = function (round) {
        if (round % 2 === 0) {
            sign = playerX.sign
        }
        if (round % 2 === 1) {
            sign = playerO.sign
        } return sign
    }

    const putSign = function (index, sign) {
        gameBoard[index] = sign
    }

    return { gameBoard, putSign, getSign }
})()

// DOM MANIMULATE

const Dom = (function () {
    const square = document.querySelectorAll(".square")

    return { square }
})()

//RENDER

const Render = (function () {
    const render = function () {
        for (i = 0; i < Gameboard.gameBoard.length; i++) {
            Dom.square[i].textContent = Gameboard.gameBoard[i]
        }
    }
    return { render }
})()

//PLAYERS

const player = function (name, sign) {
    return { name, sign }
}

const playerX = player("playerX", "X")
const playerO = player("playerO", "O")

//GAMEFLOW

const Gameflow = (function () {
    let round = 1
    const playGame = function () {
        Dom.square.forEach((square) => {
            square.addEventListener("click", function (e) {
                const index = e.target.dataset.index
                round++
                sign = Gameboard.getSign(round)
                Gameboard.putSign(index, sign)
                Render.render()
            })
        })
    }
    return { playGame }
})()


Gameflow.playGame()


