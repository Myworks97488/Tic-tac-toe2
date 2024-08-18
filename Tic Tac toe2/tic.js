let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
    gameBoard.push('');
    document.getElementById(`cell-${i}`).addEventListener('click', handleCellClick);
}

// Handle cell click
function handleCellClick(event) {
    if (gameOver) {
        return;
    }

    // Get the cell index from the event target
    const cellIndex = event.target.id.replace('cell-', '');

}