var emptyArr = []; //1st task empty array

var objectArr = [{ }]   //2nd task empty array using object notation

var stringArr = ["hello","hi"] //3rd task declare and initiallize string array
stringArr.unshift("welcome");  // adds string in the beginning
stringArr.push("greeting")  //adds string in the end
// console.log(stringArr);

var booleanArr = [];    // declare and initialized boolean array
var value = 2;
for (j = 0; j<value; j++) {
    booleanArr.push(false);
}
// console.log(booleanArr)

var mixedArr = [];      //initialize mixed array
for (var i=0; i<= 30;i++){
    if(3 % i) {
        mixedArr.push(true)
    }
    else if(i/2) {
        mixedArr.push("string")
    }
    else if(i/3) {
        mixedArr.push(4)
    }
    // console.log(i)
    // console.log(mixedArr)
}

//7: Declare and Initialize an array and store available mobile networks in Pakistan

var network = ["Jazz","Ufone"];
network.splice(2,0,"Telenor","Warid");
// console.log(network);

//8: Declare and Initialize an array and store available education qualifications in Pakistan

var Arrnum = [5,10,15,20,25];
var num;
var displayArray = "The numeric array elements: <BR>";

for (num=0; num < Arrnum.length; num++){
    displayArray +=`<li> ${Arrnum[num]} </li>`;
    }
    console.log(num)
    console.log(displayArray)
    document.getElementById("demo").innerHTML = displayArray; 


var qualifications = ["SSC","HSC","BCS","BS","B.COM","MS","M.Phil","Ph.D"];
var eduList;
var qualList = "<h1>Qualifications:</h1>";

// below commented method will show the result with empty element nodes

// for (eduList = 0; eduList<qualifications.length; eduList++){          
//     qualList += `<li>${qualifications[eduList]}<li> `
//     console.log(qualifications[eduList]) 
//     console.log(qualList);
//     document.getElementById("list").innerHTML = qualList;
// }

//  another method using Array.map() this method let’s you take an array of data and create a new array from it while modifying each entry.

qualifications.map((qualification)=>{
    qualList += `<li>${qualification}</li>`
    document.getElementById("list").innerHTML = qualList
    // console.log(qualification + "    ====> qualification");
    // console.log(qualList + "    ====> qualList");
})

// 10: Declare and initialize an empty array to store top movies of 2015.

//You have to declare the array outside the function. because whenever you hit the submit button a new array object is being created and the previous one is being lost because of scope.
//if we declare a variable inside any function this variable is only visible in this function. Outside this function we can't access it.

var movieArr = []
function addMovie() {
    let movieInput = document.getElementById("movie").value;
    let movieList = "Famous Movies"
    movieArr.push(movieInput);
    console.log(movieArr);
    for (a = 0; a<movieArr.length; a++) {
        movieList += `<li>${movieArr[a]}</li>`;
        document.getElementById("mlist").innerHTML = movieList;
        document.getElementById("mquantity").innerHTML = movieArr.length
    }
}

// question 10

var carArr = ["Audi","Ferrari","Jaguar","Lamborghini"];
var carList = "";
var firstIndex = carArr.indexOf(carArr[0])
var firstIndexText = carArr.slice(0,1);
var lastIndex = carArr.length-1
var lastIndexText = carArr.slice(-1)
var cPara;
var cNode;
carArr.map((cars) =>{
    carList += ` ${cars},`
})
cPara = document.createElement("p");
cNode = document.createTextNode(carList);
cPara.appendChild(cNode);
console.log(cPara)
console.log(carList)
console.log(lastIndex)
var listP = document.getElementById("cars").appendChild(cPara);
document.getElementById("f-index").innerHTML = firstIndex;
document.getElementById("ft-index").innerHTML = firstIndexText;
document.getElementById("l-index").innerHTML = lastIndex;
document.getElementById("lt-index").innerHTML = lastIndexText;

// Question: 11
var names = [];
var scores = [];
var percent = []
var totalMarks = 500;
var totalPercent;
var remarks= "";
function calPercent(){
    var nameValue = document.getElementById("names").value;
    var scoreValue = document.getElementById("scores").value
    if(scoreValue > 500){
        alert("please enter proper total marks")
    }
    else if(names.length < 3 && scores.length < 3) {
        names.push(nameValue);
        scores.push(scoreValue);
        console.log(names);
        console.log(scores)
        totalPercent = (scoreValue * 100) / 500;
        console.log(totalPercent);
        percent.push(totalPercent);
        percent = percent.slice(-1)
        console.log(percent);
        remarks += `<p>Score of ${nameValue} is ${scoreValue}. Percentage is ${percent}% </p>`
        console.log(remarks);
        document.getElementById("result").innerHTML = remarks;
    }
    else{
        alert("report list is full")
    }
}
// question 12

// to move array from one position from another

Array.prototype.move = function(from,to){
    this.splice(to,0,this.splice(from,1)[0]);
    return this;
  };
  var arr = [ 'a', 'b', 'c', 'd', 'e'];
  console.log(arr.move(3,1).join(','));//"a,d,b,c,e"
  
  var arr = [ 'a', 'b', 'c', 'd', 'e'];
  console.log(arr.move(0,2).join(','));//"b,c,a,d,e"
//   ========================================================

// to get values of array
// Input array contain some elements. 
var array = [ 'a', 'gfg', 'c', 'n' ]; 

// Here array.values() function is called. 
var iterator = array.values(); 

// Here all the elements of the array is being printed. 
for (let elements of iterator) { 
console.log(elements); 
} 
// ==========================================================

// replace index position of array

let color = ["white","black","blue","red","green"];
let displayColor = document.getElementById("color")
displayColor.innerHTML = color


function colorOPtion(){
    var value_A = document.getElementById("input-color").value;
    console.log("value",value_A)
    let found = false , index = 0;
    color.forEach((c,i)=>{
        if(c===value_A)
        {
            found = true;
            index = i;
        }
    });
    if(found){
        let temp = color[0];
        color[0] = color[index];
        color[index] = temp;
        displayColor.innerHTML = JSON.stringify(color)


    }
     color = JSON.stringify(color)
 
}

// question 12-a
let colorA = ["white","black","blue","red","green"];
document.getElementById("color-a").innerHTML = colorA

function colorOPtionA(){
    let valueColorA = document.getElementById("input-color-a")
    valueColorA = valueColorA.value
    colorA.unshift(valueColorA);
    console.log(colorA);
    document.getElementById("color-a").innerHTML = colorA
}

// question 12-b
let colorB = ["white","black","blue","red","green"];
document.getElementById("color-b").innerHTML = colorA

function colorOPtionB(){
    let valueColorB = document.getElementById("input-color-b")
    valueColorB = valueColorB.value
    colorB.push(valueColorB);
    console.log(colorB);
    document.getElementById("color-b").innerHTML = colorB
}

// question 12-c
let colorC = ["white","black","blue","red","green"];
document.getElementById("color-c").innerHTML = colorC
colorC.splice(0,0,"purple","yellow");
document.getElementById("color-c-u").innerHTML = colorC

// question 12-d
let colorD = ["white","black","blue","red","green"];
document.getElementById("color-d").innerHTML = colorD
function colorOptionD(){
    colorD.shift()
    document.getElementById("color-d-u").innerHTML = colorD
}

// question 13

var scoreArr = []
// scoreArr = parseInt(scoreArr);
var sortScoreArr ;
function scoreSubmit(){
    var scoreValue = document.getElementById("s-score").value;
    
    scoreArr.push(scoreValue)
    console.log(scoreArr);
    document.getElementById("ss").innerHTML = scoreArr
    sortScoreArr = scoreArr.sort((a,b)=>a-b);
    console.log(sortScoreArr);
    document.getElementById("sss").innerHTML = sortScoreArr
}

// question 14

var fruits = ["strawberry", "apple", "orange", "banana"];
document.getElementById("f-list").innerHTML = fruits;
var sortedFruits = fruits.sort();
document.getElementById("f-list-sorted").innerHTML = sortedFruits;

// question 15
var cities = ["Karachi ","Lahore ","Islamabad ","Quetta ","Peshawar "];
var selectedCities = cities.slice(1,4);
document.getElementById("cities-list").innerHTML = cities;
document.getElementById("s-cities-list").innerHTML = selectedCities;

// question 16
var arrText = ["This ", "is ", "my ", "cat"];
var arrString = arrText.join()
document.getElementById("arr-text").innerHTML = arrText;
document.getElementById("arr-string").innerHTML = arrString;