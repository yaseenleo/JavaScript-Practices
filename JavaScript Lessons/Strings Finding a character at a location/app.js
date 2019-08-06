var name = prompt("Enter your name");
var char = name.charAt(0); //name.slice(0,1); both purpose are simalar but charAt is more direct
var lastLength = name.length - 1;
console.log(char);
console.log(lastLength);

var text = prompt("Input any text with exclamation or without exclamation");
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}