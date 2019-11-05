const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];

console.log(days[0])

days.forEach(function(day, index){
    console.log(`starts with ${index+1} -- ${day}`)
});

//in forEach function the first parameter should be element it self in the array and second should be the index

const months = ['January', 'Fabuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months.forEach( (month, index)=>{
    if(index === 0){
        console.log(`The ${index+1}st month is ${month}`)
    }
    else if(index+1 === 2) {
        console.log(`The ${index+1}nd month is ${month}`)
    }
    else if(index+1 === 3) {
        console.log(`The ${index+1}rd month is ${month}`)
    }
    else{
        console.log(`The ${index+1}th month is ${month}`)

    }
})

const myTodo = []

myTodo.push("Play Games");
myTodo.push("Record videos for youtube");
myTodo.push("Eat food properly");

myTodo.forEach((todo, index) => {
    console.log(`Your task no. ${index + 1} is ${todo}`)    
});