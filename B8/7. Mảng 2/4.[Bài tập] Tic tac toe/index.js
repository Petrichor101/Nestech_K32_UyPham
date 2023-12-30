
game = (row, col, symb) => {
    gameState[row][col] = symb
    if (gameState[row].every((value) => value == symb) || gameState.every((value) => value[col] == symb)) {
        document.getElementById('turn').innerText = `${symb ? 'X':'O'} wins`
    } else if ((gameState[0][0] == symb && gameState[0][0] == gameState[1][1] && gameState[1][1] == gameState[2][2]) || (gameState[2][0] == symb && gameState[2][0] == gameState[1][1] && gameState[1][1] == gameState[0][2])) {
        document.getElementById('turn').innerText = `${symb ? 'X':'O'} wins`
    } else if (gameState.every(row => row.every(cell => cell !== null))) {
        document.getElementById('turn').innerText = `Tie`
    }


}

handleClick = (e) => {
    let square = e.target
    square.style.color = turn ? "blue" : "red"
    square.innerText = turn ? "X" : "O"
    square.removeEventListener('click', handleClick)

    let [row, col] = square.id.split('_').map(Number)
    document.getElementById('xo').style.color = turn ? 'red' : 'blue'
    document.getElementById('xo').innerText = turn ? 'O' : 'X'
    game(row, col, turn)
    turn = !turn


}

let turn = true
let gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

gameBoard = (e) => {
    e.target.remove()
    let board = document.getElementById('board');
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            cell.id = `${i}_${j}`;
            cell.addEventListener('click', handleClick);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.getElementById('turn').style.visibility = 'visible'
}



