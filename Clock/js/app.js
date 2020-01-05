var time = new Date
var day = time.getDay();


var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var daysInWeek = document.getElementById('day');

function hexClock() {

    var currentTime = new Date
    // console.log(currentTime);
    var gHour = currentTime.getHours()

    var day;
    var hour;
    var minute;
    var second;
    var period

    day = currentTime.getDay();
    // console.log(day);
    day = day.toString();
    // console.log(typeof day);

    hour = currentTime.getHours()

    if (hour.length <= 12) {
        period = 'AM'

    } else {
        period = 'PM';
        hour = hour % 12;
    }

    hour = hour.toString()
    // console.log('Hour',hour);

    minute = currentTime.getMinutes()
    // console.log(minute);
    minute = minute.toString();

    second = currentTime.getSeconds()
    // console.log(second);
    second = second.toString();


    if (hour.length < 2) {
        hour = '0' + hour;
    }

    if (minute.length < 2) {
        minute = '0' + minute;
    }

    if (second.length < 2) {
        second = '0' + second
    }

    let time = `${hour % 12} : ${minute} : ${second} ${period}`
    let hexCode = `#${gHour}${minute}${second}`
    clock.textContent = time;
    hexColor.textContent = hexCode;

    document.body.style.backgroundColor = hexCode;
}

hexClock()
setInterval(hexClock, 1000);

setInterval(() => {
    switch (day) {
        case 0:
            daysInWeek.textContent = 'Sunday'
            break;
    
        case 1:
            daysInWeek.textContent = 'Monday'
            break;
        
        case 2:
            daysInWeek.textContent = 'Tuesday'
            break;
    
        case 3:
            daysInWeek.textContent = 'Wednesday'
    
        case 4:
            daysInWeek.textContent = 'Thursday'
            break;
    
        case 5:
            daysInWeek.textContent = 'Friday'
            break;
    
        case 6:
            daysInWeek.textContent = 'Saturday'
    }
}, 1000);

function alarm() {
        
}