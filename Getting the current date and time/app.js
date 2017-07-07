var rightNow = new Date();
console.log(rightNow);

var dateString = rightNow.toString();
console.log(dateString);

var theDay = rightNow.getDay();
console.log(theDay);

var dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var now = new Date();
var day = now.getDay();
var nameOfToday = dayName[day];
console.log(nameOfToday);