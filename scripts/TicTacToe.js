let currentPlayer = 'X';
let gameOver = false;

function play(cell) {
  if (cell.textContent !== '') {
    return;
  }

  if (gameOver) {
    return;
  }

  cell.textContent = currentPlayer;

  if (checkWin()) {
    document.getElementById('status').textContent = currentPlayer + " wins!";
    gameOver = true;
    return;
  } 

  let cells = document.querySelectorAll('td');
  let allFilled = true;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      allFilled = false;
    }
  }

  if (allFilled) {
    document.getElementById('status').textContent = 'its a tie';
    gameOver = true;
    return;
  }

  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

  document.getElementById('status').textContent = currentPlayer + "'s turn";
}


function checkWin() {
  let cells = document.querySelectorAll('td');

  const wins = [
  [0,1,2], // top row
  [3,4,5], // middle row
  [6,7,8], // bottom row
  [0,3,6], // left column
  [1,4,7], // middle column
  [2,5,8], // right column
  [0,4,8], // diagonal 
  [2,4,6]  // diagonal 
  ];

  for (let i = 0; i < wins.length; i++) {
    let a = wins[i][0];    //[0, 1, 2]
    let b = wins[i][1];    //[3, 4, 5]
    let c = wins[i][2];    //[6, 7, 8]

    if (cells[a].textContent !== '' &&
        cells[a].textContent === cells[b].textContent &&
        cells[b].textContent === cells[c].textContent) {
          return true;
        }
  }
  return false;


}