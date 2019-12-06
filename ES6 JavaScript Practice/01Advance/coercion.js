console.log("5" - 5);

console.log("5" + 5);

const giveType = typeof '5';
console.log(giveType);

const giveType1 = typeof 5;
console.log(giveType1);

const giveType2 = typeof {};
console.log(giveType2);

const adder = true + 5;
console.log(adder);

const adder1 = false + 5;
console.log(adder1);

const loignDetails = []
// login for getting details for DB

const loginID = loignDetails[0];

if (loginID !== undefined) {
    console.log('Allow user to login');
    
}
else{
    console.log('Auth Failed');
    
}

//Values that interpret as false
false
0
''
null
undefined

// anything else rather then these are true

// coercion is a technique in which javascript do something for you