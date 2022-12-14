let notes = ['note 1', 'note 2', 'note 3']
console.log(notes);

console.log(notes.length);

console.log(notes[0]);
console.log(notes[1]);

console.log(notes.length -1); //to take last value of arraya
console.log(notes.length -2); //to take 2nd last value of arraya

notes.push("my new note"); //add last item
console.log(notes);

notes.pop(); //removes last item
console.log(notes);

notes.shift(); // removes first item
console.log(notes);

notes.unshift("my first note"); // adds first item
console.log(notes);

notes.splice(1 , 1); // first parameter is the index of target item, 2nd parameter is how many you want to delete
console.log(notes);

notes.splice(1 , 0, "this is the second item"); // 0 means delete nothing
console.log(notes);

notes[2] = "this is now the new note 3"
console.log(notes);

