const cells = document.querySelectorAll(".cell");
let turn = "X";
cells.forEach(cell => {
 cell.onclick = () => {
   if (cell.textContent === "") {
     cell.textContent = turn;
     turn = turn === "X" ? "O" : "X";
   }
 };
});