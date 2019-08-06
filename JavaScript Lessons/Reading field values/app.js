// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address required");
//     }
// }

function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    if (val === "") {
        alert("Email address required.");
    }
} 