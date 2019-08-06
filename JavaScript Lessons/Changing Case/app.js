// var cityToCheck = prompt("enter your city");
// var cityFound = false;
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "new york", "great falls"];
// for (var i = 0; i <=4 ; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//          cityFound = true;
//         // alert("It's one of the cleanest cities");
//     }
//     else {
//          cityFound = false;
//         // alert("It's not one of the cleanest cities");

//         console.log(cityFound);
//     }

// }
// if (cityFound == true) { alert("It's one of the cleanest cities"); }
// else { alert("It's not one of the cleanest cities"); }
// console.log("hello")

// toLowerCase
var cityToCheck = prompt("Enter your city");
var cityFound = false;
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        cityFound = true;
        alert("It's one of the cleanest cities");
    }
    else{
        cityFound = false;
        alert("It's not one of the cleanest cities")
    }
    console.log("Lower Case",cityFound);
}

// toUpperCase
var cityToCheck = prompt("Enter your city");
var cityFound = false;
cityToCheck = cityToCheck.toUpperCase();
var cleanestCities = ["CHEYENNE", "SANTA FE", "TUCSON", "GREAT FALLS", "HONOLULU"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        cityFound = true;
        alert("It's one of the cleanest cities");
    }
    else{
        cityFound = false;
        alert("It's not one of the cleanest cities")
    }
    console.log("Upper Case",cityFound);
}
