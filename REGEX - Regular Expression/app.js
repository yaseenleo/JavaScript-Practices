// Match Literal Strings

let sentence = "The dog chased the cat";
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);     //true

let waldoIsHiding = "Somewhere Waldo is hiding in this Text.";
let waldoRegex = /Waldo/;
// let result =  waldoRegex.test(waldoIsHiding);
// console.log(result);     //true

// Match a Literal String with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;  //dog or cat or bird or fish
// let result = petRegex.test(petString);  
// console.log(result);     //true

// Ignore case while Matching
let myString1 = "learningToCode";
let fccRegex = /LearningToCode/i;    // /i is a flag which means ignore the case sensitive
// let result = fccRegex.test(myString1);
// console.log(result);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string";
let codingRegex = /coding/;
// let result = extractStr.match(codingRegex); // matches a string an object and returns the match on an array
// console.log(result);    // coding

// Find More Than The First Match
let testStr = "Repeat Repeat Repeat";
let ourRegex = /Repeat/g;       // g is a flag which performs global match to find all occurrences of the match pattern instead of stopping and returns at match value in an array
testStr.match(ourRegex);
console.log(testStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let resultMatchAll = twinkleStar.match(starRegex)
console.log(resultMatchAll);
 
// Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./   // . is a wildcard period which matches every word that consist these alphabets
humStr.match(huRegex)  // Returns ["hum"]
hugStr.match(huRegex)  // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let wildcardResult = unRegex.test(exampleStr)
console.log(wildcardResult);

//Match Single Character with Multiple Possibilities
let bgRegex = /b[aiu]g/;   // this means the first letter will be "b" the last will be "g" in the middle it will be [aiu]

let quoteSample = "Beware of bugs in the above code; I have only proved it correct"
let vowelRegex = /[aeiou]/ig;
// let result = quoteSample.match(vowelRegex)
// console.log(result); // ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e"]

// Match letters of Alphabetes
let quoteSample1 = "The quick brown fox jumps over the lazy dog";
let alphabetRegex = /[a-z]/ig;  // to select letters from a to z lower case
// let result = quoteSample1.match(alphabetRegex);
// console.log(result);  // ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]

// Match Number and letters of the Alphabet
let quoteSampleNAndM = "Blueberry 3.141592653s are delicious.";
let myRegexNAndM = /[2-6h-s]/ig; // this means it will select numbers from 2 to 6 and alphabets from h to s
// let result = quoteSampleNAndM.match(myRegexNAndM);
// console.log(result); // ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]

// Match Single Characters Not Specified
let quoteSampleCNS = "3 blind mice.";
let myRegexCNS = /[^0-9aeiou ]/ig; //Negated Character Set: It will not match 0 to 9 character and vowels and space
// let result = quoteSampleCNS.match(myRegexCNS);
// console.log(result);  //[" ", "b", "l", "n", "d", " ", "m", "c", "."]

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississipspi";
let myRegexMultiChar = /s+/g;  // + increments +1 to alphabets that matches in a row and writes together in an array the example is on console log
// let result = difficultSpelling.match(myRegexMultiChar);

// console.log(result);  //["ss", "ss", "s"]

// Match Characters that Occur Zero or More Times
let soccerWord = "goooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;  //* means match g and o one or more times
soccerWord.match(goRegex); // Return ["gooooooo"]
gPhrase.match(goRegex); // Return["g"]
oPhrase.match(goRegex); // Return null

let chewieQuote = "Aaaaaaaaaaaaarrgh!";
let chewieRegex = /a*/i;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// Find Characters with Lazy Matching
// Regex default pattern is Greedy match

// Greedy match the longest possible part of string which matches regex pattern and returns as a match
// if a question mark ? is added it will be called a lazy match
let string = "titanic";
let lMRegex = /t[a-z]*i/; //Greedy Match  // this means first we are looking for letter t the [a-z]* means look letters from a to z, astric or star means zero or more occurence of letters [a-z] after astric i means at last it will look for "i"
// let lMRegex = /t[a-z]*?i/; // Lazy Match // Return ["ti"]
string.match(regex) //Return [titani]
console.log(string.match(lMRegex)); //Greedy Match 

// A Lazy match matches the smallest possible part of string which matches regex pattern and return as a match
let text = "<h1>Winter is coming</h1>"
// let myRegexLM = /<.*>/; //Greedy Match // Return ["<h1>Winter is coming</h1>"] //dot is a wild card character it means any letter or character and astric or star means zero or more occurence of letters
let myRegexLM = /<.*?>/; // Lazy Match // Return ["<h1>"]
// let result = text.match(myRegexLM);
// console.log(result);

// Task 1
//Find One or More Criminals in a Hunt
// Q1: A group of criminals escaped from jail C is denoted as Criminals find all c at once in single array index?
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals)
console.log(matchedCriminals);

// Match Beginning String Patterns
let  rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // ^ carrot character allow character match in beginning
// let result = calRegex.test(rickyAndCal);
// console.log(result);  // true

// Match Ending String Pattern
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; //^ dollar character allow character match in the end
// let result = lastRegex.test(caboose); //true
// console.log(result);

//Match All Letters and Numbers
let quoteSampleM1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w]/g;
// let result = quoteSampleM1.match(alphabetRegexV2).length;
// console.log(result); // 31

// Match Everything But Letters and Numbers
let quoteSampleM2 = "The five boxing wizards jump quickly.";
let notAlphabetRegex = /\W/g;
// let result = quoteSampleM2.match(notAlphabetRegex).length;
// console.log(result); // 6

// Match All Numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
// let result = numString.match(numRegex);
// console.log(result); // ["5", "0", "0"]

// Match All non Numbers
let numString1 = "Your sandwich will be $5.00";
let nonNumRegex = /\D/g;
// let result = numString.match(nonNumRegex);
// console.log(result); // ["Y", "o", "u", "r", " ", "s", "a", "n", "d", "w", "i", "c", "h", " ", "w", "i", "l", "l", " ", "b", "e", " ", "$", "."]


// Restrict Possible Usernames
//Q2: fullfill these requirements
// 1) If there are numbers, they must be at the end.
// 2) Letters can be lowercase and uppercase.
// 3) At lest two characters long. Two-letter names can't have numbers.

let Username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; //it means in the initial there will be alphabets in upper and lowercase in the curly it is defined number of repeatation matches and in the end \d*$ means in the end there should be numbers 0 or more times
// let result = userCheck.test(Username); //true
// console.log(result);

// Match Whitespace
let sample ="Whitespace is important in separating words";
let countWhiteSpace = /\s/g; //  its going to match space, character turn, tab and a new line character.
// let result = sample.match(countWhiteSpace);
// console.log(result); // [" ", " ", " ", " ", " "]

// Match Non-Whitespace Characters
let sample1 = "Whitespace is important in separating words"
let notCountWhiteSpace = /\S/g;
// let result = sample1.match(notCountWhiteSpace);
// console.log(result); //["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", "a", "r", "a", "t", "i", "n", "g", "w", "o", "r", "d", "s"]

// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; //this means it will match the O and h by inserting Quantity Specifier after h the first one means there will be minimum 3 times h and maximum 6 times h
// let result = ohRegex.test(ohStr) // true

// Specify Only the Lower Number of Matches