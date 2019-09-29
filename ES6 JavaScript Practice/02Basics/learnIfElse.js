if(false){
    console.log("i am inside if block");
    console.log("i am still inside if block")
} else if(true){
    console.log("i am inside IF IN CAPS BLOCK");
} else{
    console.log("notice this part");
}

// is email verified or not sample

var whoIsHere = 'user'  //user, teacher, anything

// single = is assignment operator

if(whoIsHere === 'user'){
     console.log("greeting message for user");
     console.log("allow access to view all courses");
} else if(whoIsHere === 'teacher'){
    console.log("greeting message for Teacher");
    console.log("allow access to view all courses");
} else{
    console.log("MESSAGE: please verify your email");
    console.log("send user an email for verification")
}

// Grade Problem 

// students marks
// 10 - amazing
// 5 - good
// 3 - poor
// 0 - fail

var marks = 10

if(marks === 10) {
    console.log("amazing");
} else if(marks === 5){
    console.log("good");
} else if(marks === 3){
    console.log("poor")
}else if(marks === 0){
    console.log("fail")
}