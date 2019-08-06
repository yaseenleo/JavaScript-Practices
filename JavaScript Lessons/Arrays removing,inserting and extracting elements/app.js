var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";
console.log(pets);

var removeBeginningArray = pets.shift();
console.log(removeBeginningArray);

console.log(pets);

var addBeginningArray = pets.unshift("lion");
console.log(addBeginningArray);

console.log(pets);

var insertAndRemoveElementsFromArray = pets.splice(2,2,"duck","emu","sparrow");
console.log(insertAndRemoveElementsFromArray);

console.log(pets);

var nopets = [];
nopets = pets.slice(0,1);
nopets = pets.slice(3,5);

console.log(nopets);
