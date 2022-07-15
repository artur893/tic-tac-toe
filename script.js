const Gameboard = (function () {
    const gameBoard = ["x","x","o","o","o","x","x","o","x"]
    return { gameBoard }
})()


const Render = (function () {

})()

const Gameflow = (function(){

})()

const player = function (name, sign) {
    return { name, sign }
}

const playerX = player("playerX", "X")
const playerO = player("playerO", "O")


console.log(gameBoard)

