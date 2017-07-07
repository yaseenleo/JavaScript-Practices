var d = new Date();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currentYear = d.getFullYear();
var currentHours = d.getHours();
var currentMinute = d.getMinutes();
var currentSeconds = d.getSeconds();
var currentMilliseconds = d.getMilliseconds();
var millisecondsSinceMidnight = d.getTime();

console.log("Date: ",d);
console.log("Month: ",currentMonth);
console.log("Day of Month: ",dayOfMonth);
console.log("Year",currentYear);
console.log("Hours",currentHours);
console.log("Minutes: ",currentMinute);
console.log("Seconds: ",currentSeconds);
console.log("Milliseconds",currentMilliseconds);
console.log("Milliseconds since Midnight: ",millisecondsSinceMidnight);