var firstName = ["BlueRay","Upchuck","Lojack","Gizmo","Do-Rag"];
var lastName = ["Zzz","Burp","Dogbone","Droop"];
var fullName = [];
for (var i = 0; i<firstName.length; i++) {
    for ( var j = 0; j<lastName.length; j++) {
        fullName.push(firstName[i] + lastName[j]);
        console.log(fullName);
    }
}