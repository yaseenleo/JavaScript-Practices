// && - AND OPERATOR - Both sides need to be true
// || - OR operator - one side need to be true in order to proceed
// ! this exclamation sign is a reverse logical operation what ever the value your are storing it will return negative of that it only works in boolean

let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(!isVerified && isLoggedIn && hasPaymentToken) {
    console.log("Greating message to user");
    console.log("Grant access to paid offer")
}
else if(isVerified || isGuest){
    console.log("Allow free previews")
}
else{
    console.log("MESSAGE: please contact admin")
}