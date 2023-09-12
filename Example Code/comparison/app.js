let age = document.getElementById("age");

age.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        e.preventDefault();
        submit()
    }
})

function submit(){
    let value = age.value;
    
    if(value <= 7 || value >= 65 ){
        alert("discount")
    }
    else{
        alert("no discount")
    }
}