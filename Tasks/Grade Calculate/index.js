let score = prompt("Enter Your Obtained Score")
let totalScore = prompt("Enter Total score number")

score = Number(score)
let wholeScore = Math.ceil(score)
console.log(typeof(wholeScore))
console.log(wholeScore)

let scoreFunction = function(score, totalScore){
    let percentage = (score / totalScore) * 100;

    percentage = Math.ceil(percentage)
    console.log(percentage)

    if(percentage >= 90){
        alert("you got A Grade congrats")
        console.log("run 1")
    }
    else if( percentage <= 89 && percentage >= 80){
        alert("you got B Grade")
        console.log("run 2")
    }
    else if( percentage <= 79 && percentage >= 70 ){
        alert("you got C grade")
        console.log("run 3")
    }
    else if( percentage <= 69 && percentage >= 60){
        alert("you got D grade")
        console.log("run 4")
    }
    else{
        alert("you got F grade")
        console.log("last line")
    }
}

scoreFunction(wholeScore, totalScore)