let name = "  nick harigan  ";

// length property
console.log(name.length);

// Convert to upercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase())

// trim
console.log(name.trim())

// isValidPassword
let isValidPassword = function(password){

    // if(password.length > 8 && !password.includes("password")) {
    //     return true
    // }
    // else{
    //     return false
    // }

    // or

    return password.lenth > 8 && !password.includes("password")
}

console.log(isValidPassword("abc12345"))
console.log(isValidPassword("abc12345password"))
console.log(isValidPassword("abc12345abc"))
