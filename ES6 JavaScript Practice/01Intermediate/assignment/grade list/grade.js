
let gradeCalculate = function(totalMarks, currentMarks) {
    let formula = (currentMarks / totalMarks) * 100;

    if(formula >= 80){
        console.log(`Your Total Marks is ${totalMarks}, obtained is ${currentMarks} and Grade is A+`)
    }

    else if(formula >= 70 && formula <= 80){
        console.log(`Your Total Marks is ${totalMarks}, obtained is ${currentMarks} and Grade is A`)
    }

    else if(formula >= 60 && formula <= 70){
        console.log(`Your Total Marks is ${totalMarks}, obtained is ${currentMarks} and Grade is B`)
    }

    else if(formula >= 50 && formula <= 60){
        console.log(`Your Total Marks is ${totalMarks}, obtained is ${currentMarks} and Grade is C`)
    }

    else{
        console.log(`Your Total Marks is ${totalMarks}, obtained is ${currentMarks} and Grade is F`)
    }
}

gradeCalculate(100, 75);

let getMyGrade = (currentMarks, totalMarks) =>{

    let percent = (currentMarks/totalMarks) * 100;

    let myGrade = '';

    if (percent >= 90) {
        myGrade = 'A'
    }
    else if(percent >= 80){
        myGrade = 'B'
    }
    else if (percent >= 70) {
        myGrade = 'C'
    }
    else if(percent >= 60){
        myGrade = 'D'
    }
    else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and percentage is ${percent}`
}

let yourResult = getMyGrade(66,100);
console.log(yourResult);
