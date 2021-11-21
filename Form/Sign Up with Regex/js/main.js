let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userNumber = document.getElementById("user-number");
let userPassword = document.getElementById("user-password");
let userConfirmPass = document.getElementById("user-c-password");

let nameState = false;
let emailState = false;
let numberState = false;
let passwordState = false;

// user name validation
userName.addEventListener('blur', ()=> {
    console.log("blur user name working")

    let userNameValue = userName.value
    let nameRegex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/

    console.log(userNameValue);
    if(nameRegex.test(userNameValue)){
        console.log("it matched");
        nameState = true;
        console.log(nameState);
    }
    else{
        console.log("didn't match");
    }
})

// email validation
userEmail.addEventListener('blur', ()=> {
    console.log("blur user name working")

    let userEmailValue = userName.value;
    
    console.log(userEmailValue);
})

// number validation
userNumber.addEventListener('blur', ()=>{
    console.log("blue number is working");

    let userNumberValue = userNumber.value;
    console.log(userNumberValue);
})
let registerSubmit = document.getElementById("signup-submit");

registerSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    console.log(userNumber);
    console.log(userPassword);
    console.log(userConfirmPass);
})