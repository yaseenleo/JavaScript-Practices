var inputDivisible = document.getElementById("divisible").value;
function divide(){
    console.log(inputDivisible)
    if(inputDivisible / 3){
        alert("this number is divisible by 3")
    }
    else{
        alert("Number is not divisible by 3")
    }
}