// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address required");
//     }
// }

function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    var pas = document.getElementById('pass').value;
    if (val === "") {
        alert("Email address required.");
    }
    if (pas < 8 ) {
        alert('password is short');
    }
} 