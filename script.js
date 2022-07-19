// GAMEBOARD

const Gameboard = (function () {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]

    const getSign = function (round) {
        if (round % 2 === 0) {
            sign = playerX.sign
        }
        if (round % 2 === 1) {
            sign = playerO.sign
        } return sign
    }

    const putSign = function (index, sign) {
        if (gameBoard[index] === "") {
            gameBoard[index] = sign
        }
    }

    const reset = function () {
        for (i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = ""
        }
    }

    const winCheck = function () {
        const winCheckO = function (a, b, c) {
            if (gameBoard[a] === playerO.sign && gameBoard[b] === playerO.sign && gameBoard[c] === playerO.sign) {
                console.log("YEAH OOOOOOO!")
                Gameflow.stopGame()
                
                
            }
        }
        winCheckO(0, 1, 2)
        winCheckO(3, 4, 5)
        winCheckO(6, 7, 8)
        winCheckO(0, 3, 6)
        winCheckO(1, 4, 7)
        winCheckO(2, 5, 8)
        winCheckO(0, 4, 8)
        winCheckO(2, 4, 6)

        const winCheckX = function (a, b, c) {
            if (gameBoard[a] === playerX.sign && gameBoard[b] === playerX.sign && gameBoard[c] === playerX.sign) {
                console.log("YEAH XXXXXX!")
                Gameflow.stopGame()
                
            }
        }
        winCheckX(0, 1, 2)
        winCheckX(3, 4, 5)
        winCheckX(6, 7, 8)
        winCheckX(0, 3, 6)
        winCheckX(1, 4, 7)
        winCheckX(2, 5, 8)
        winCheckX(0, 4, 8)
        winCheckX(2, 4, 6)
    }

    return { gameBoard, putSign, getSign, winCheck, reset }
})()

// DOM MANIMULATE

const Dom = (function () {
    const square = document.querySelectorAll(".square")
    const newgame = document.querySelector(".newgame")

    return { square, newgame }
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
    let gameOver = 0
    const playGame = function () {
        resetBoard()
        Dom.square.forEach((square) => {
            square.addEventListener("click", function (e) {
                const index = e.target.dataset.index
                if (Gameboard.gameBoard[index] === "" && gameOver === 0) {
                    round++
                    console.log(index)
                    Gameboard.putSign(index, Gameboard.getSign(round))
                    Render.render()
                    Gameboard.winCheck()
                }

            })

        })
    }
    const resetBoard = function () {
        Dom.newgame.addEventListener("click", function () {
            round = 1
            gameOver = 0
            Gameboard.reset()
            Render.render()
            playGame()
        })
    
    }

    const stopGame = function() {
        gameOver = 1
    }

    return { playGame, stopGame }
})()


Gameflow.playGame()


