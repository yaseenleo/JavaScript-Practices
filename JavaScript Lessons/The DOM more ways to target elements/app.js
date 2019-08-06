var kidNode = document.getElementById("div2");
var pNode = kidNode.parentNode;
console.log(pNode);

var  firstEl = document.getElementById("div2");
var secondEl = firstEl.nextSibling;
var secondElNode = firstEl.nextSibling.nodeType;
console.log(secondEl);
console.log(secondElNode);

var firstEl = document.getElementById("div1");
var nonExentence = firstEl.previousSibling;
console.log(nonExentence);