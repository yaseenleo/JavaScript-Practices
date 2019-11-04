//datatype - Array
// for arrays we usually use const

const superHeroes = ['Iron Man','Spiderman','Capt. America'];

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes.length);
console.log([superHeroes.length-1]);
console.log( superHeroes[superHeroes.length - 1]);
console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['one','two','three','four','five','six']
// numbers[1] = 'SOMETHING'
// console.log(numbers);

//start
     // number shift
     numbers.shift() //it will remove/shift the first element
     console.log(numbers);

     numbers.unshift('SOMETHING') //it is inserting one more value at first position of index
     console.log(numbers);
     
     
//end
 console.log("The element to be deleted is: " + numbers.pop()) //it will remove the last element of array
console.log(numbers);

numbers.push("seven") //it pushes the value in the last index of array
console.log(numbers);

//middle
numbers.splice(2,1,'SOMETHING')
console.log(numbers);
