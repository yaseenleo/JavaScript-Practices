let iAmGlobal = "someValue";

if (true) {
    let iAmLocal = "someMoreValues"; //if var is used the variable will beb accessable outside the condition
    console.log(iAmGlobal);
    iAmGlobal = "superman"
    console.log(iAmLocal);
    
}

// console.log(iAmLocal); // iAmLocal variable is not available outside curly bracket because it is local
console.log(iAmGlobal);

// Kings Territory Problem

let king = "John"

if(true) {
    let king = "Sam"

    if(true) {
        let king = "Affan"; // if this variable is not available it will move up and access the king
        console.log(king);
        //if we dont declare the type of variable and simply right the name it will take it as a global variable
    }
}

if(true) {
    console.log("i am second part" + king);
    
}