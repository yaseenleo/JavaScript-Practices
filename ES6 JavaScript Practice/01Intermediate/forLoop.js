const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];

for (let index = 0; index < days.length; index++) {
    const day = days[index];
    console.log(day)
}
console.log('--------------------------------------')
// index++ means index = index + 1

for (let index = days.length-1; index >= 0; index--){
    const revDay = days[index];
    console.log(revDay);
}

console.log('--------------------------------------')

const myTodo = [];

myTodo.push("Play Games");
myTodo.push("Record videos for youtube");
myTodo.push("Eat food properly");

for(let index = 0; index < myTodo.length; index++) {
    console.log(`Your task no. ${index + 1} is ${myTodo[index]}`)
}
console.log('--------------------------------------')
for(let index = myTodo.length -1; index >= 0; index--) {
    console.log(`Your task no. ${index + 1} is ${myTodo[index]}`)
}