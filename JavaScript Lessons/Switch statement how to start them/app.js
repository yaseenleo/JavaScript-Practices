var days = prompt("enter days of week");
var upperCase = days.toUpperCase();
var lowerCase = days.toLowerCase();
var firstChar = upperCase.slice(0,1);
var allChar = lowerCase.slice(1);
var concate = firstChar + allChar;
var dayOfWeek = concate.slice(0,3);
console.log(dayOfWeek);
// if (dayOfWeek === "Sat" || dayOfWeek === "Sun") {
//     alert("Huuurey");
// }
// else if (dayOfWeek === "Fri") {
//     alert("One more day");
// }
// else {
//     alert("Ohhh man not again");
// }

switch(dayOfWeek) {
    case "Sat" :
        alert("Huuurey");
            break;
    case "Sun" :
        alert("Huuurey");
            break;
    case "Fri" :
        alert("One more day");
            break;
    default :
    alert("Ohhh man not again");
}