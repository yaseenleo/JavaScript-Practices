function tellTime() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var time = hr + min;
    alert("Current time: " + hr + ":" + min);
}
console.log(tellTime);
tellTime();