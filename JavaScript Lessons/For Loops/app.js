var cityToCheck = prompt("Enter U.S one of the cleanest cities");
var cleanestCities = ["Cheyenna", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

if (cityToCheck === cleanestCities[0]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[1]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[2]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[3]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[4]) {
    alert("It's one of the cleanest cities");
}
else {
    alert("It's not one of the cleanest cities");
}


var cityToCheck = prompt("Enter U.S one of the cleanest cities");
var cleanestCities = ["Cheyenna", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("Its one of the cleanest cities");
    }
    else {
        alert("It's not one of the cleanest cities");
    }
}