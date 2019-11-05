const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];

for (let index = 0; index < days.length; index++) {
    const day = days[index];
    console.log(day)
}

// index++ means index = index + 1

for (let index = days.length-1; index >= 0; index--){
    const revDay = days[index];
    console.log(revDay);
}