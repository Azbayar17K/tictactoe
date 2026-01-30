const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
let turn = "X";
let gameActive = true;
const winPatterns = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];
cells.forEach((cell, index) => {
 cell.onclick = () => {
   if (cell.textContent !== "" || !gameActive) return;
   cell.textContent = turn;
   if (checkWinner()) {
     statusText.textContent = turn + " яллаа";
     gameActive = false;
     return;
   }
   if (isDraw()) {
     statusText.textContent = "Тэнцлээ";
     gameActive = false;
     return;
   }
   turn = turn === "X" ? "O" : "X";
   statusText.textContent = turn + " ээлж";
 };
});
function checkWinner() {
 return winPatterns.some(pattern => {
   const [a, b, c] = pattern;
   return (
     cells[a].textContent &&
     cells[a].textContent === cells[b].textContent &&
     cells[a].textContent === cells[c].textContent
   );
 });
}
function isDraw() {
 return [...cells].every(cell => cell.textContent !== "");
}
restartBtn.onclick = () => {
 cells.forEach(cell => cell.textContent = "");
 turn = "X";
 gameActive = true;
 statusText.textContent = "X ээлж";
};