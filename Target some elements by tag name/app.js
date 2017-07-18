var e = document.getElementById("rules");
var paragraph = document.getElementsByTagName("p")
console.log(paragraph);

function tableColor() {
var t = document.getElementById("table3");
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor="pink";
}
console.log(cells)
}