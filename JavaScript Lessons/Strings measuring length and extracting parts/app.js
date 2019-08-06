var city = "Boston";
var someChars = city.slice(2,5);
console.log(someChars);

var city = "Tucson";
var someChars = city.slice(2);
console.log(someChars);


var countyToCheck = prompt("Enter Any Country Name");
var firstChar = countyToCheck.slice(0,1);
var otherChars = countyToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCountry = firstChar + otherChars;
console.log(cappedCountry);

// taking 3 characters
var month = prompt("Enter a Month");
var charsInMonth = month.slice(0,3);
var firstChar = charsInMonth.slice(0,1);
var otherChars = charsInMonth.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedMonth = firstChar + otherChars;
console.log(cappedMonth);

// taking 3 characters using length and if condition
var month = prompt("Enter a Month");
var charsInMonth = month.length;
if (charsInMonth >= 3) {
    monthAbbrev = month.slice(0,3);
    console.log(charsInMonth);
    console.log(monthAbbrev);
}

var str = prompt("Enter Text");
var numStr = str.length;
console.log(numStr);
for (var i = 0; i < numStr; i++) {
    if (str.slice(i, i + 2) === "  ") {
        console.log("no double spaces");
        break;
    }
}