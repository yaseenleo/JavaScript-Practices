var today = new Date();
var doomsDay = new Date("June 30, 2035");
var msToday = today.getTime();
var msDoomsDay = doomsDay.getTime();
var msDiff = msDoomsDay - msToday;
var dDiff = msDiff / (1000 * 60 * 60 *24);
dDiff = Math.floor(dDiff);
console.log(today);
console.log(doomsDay);
console.log(msToday);
console.log(msDoomsDay);
console.log(msDiff);

var againMsDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var dayTillDoom = Math.floor(againMsDiff / (1000 * 60 * 60 *24));
console.log(dayTillDoom);

var d = new Date("July 1, 2017 13:25:00");
console.log(d);