
//track input form
// document.querySelector('#myform').addEventListener('change', (event)=>{
//     console.log(event.target.value);
    
// })

function myvalidation(){
    let myValue = document.getElementById('myform').value;

    if(isNaN(myValue) && myValue < 1 && myValue >20) {
        console.log('Not a valid input');
        document.querySelector('#idone').textContent = 'Not a valid input'
        
    }
    else{
        console.log('this input is ok');
        document.getElementById('idone').textContent = 'This input is ok'
    }
}

// form validation

document.querySelector('.myform').addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.realname.value);

    let username = event.target.username.value;
    let realname = event.target.realname.value;
    let password = event.target.pass.value;
    let confirmPass = event.target.confirmPass.value;
    event.target.username.value = '';
    event.target.realname.value = '';
    event.target.pass.value = '';
    event.target.confirmPass.value = '';
    // console.log(username);
    
    if(username == '' || username == ' ' && realname == '' || realname == ' '
    && password == '' || password == ' ' && confirmPass == '' || confirmPass == ' ') {
        alert('please input all values');
    }
    else if(password != confirmPass) {
        alert("please insert password correctly")
    }
    else{
        let p = document.createElement('p');
        p.textContent = `Welcome ${realname}`
        document.querySelector('body').appendChild(p);
    }
})