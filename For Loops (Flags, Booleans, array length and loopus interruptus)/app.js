// // Flags
// var cityToCheck = prompt("Enter U.S one of the cleanest cities");
// var cleanestCities = ["Cheyenna", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities")
//     }
//     console.log(matchFound);
// }
// if (matchFound === false) {
//     alert("It's not on the list");
// }

// // Boolean
// var cityToCheck = prompt("Enter U.S one of the cleanest cities");
// var cleanestCities = ["Cheyenna", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
//     console.log(matchFound);
// }
// if (matchFound === false) {
//     alert("It's not on the list");
// }

// Length
var cityToCheck = prompt("Enter U.S one of the cleanest cities");
var cleanestCities = ["Cheyenna", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
    console.log(matchFound);
}
console.log(numElements);
if (matchFound === false) {
    alert("It's not on the list");
}

