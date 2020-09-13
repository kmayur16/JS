let m = Number(input("enter row value"));
let n = Number(input("enter col value"));
var board = "";
for (var i = 0; i < m; i++) {
  for (var a = 0; a < n; a++) {
    board += a % 2 == i % 2 ? " " : "#";
  }
  board += "\n";
}
console.log(board);
