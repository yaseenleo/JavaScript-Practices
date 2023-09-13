let notes = ["note 1", "note 2", "note 3"];
console.log(notes);

console.log(notes.length);

console.log(notes[0]);
console.log(notes[1]);

console.log(notes.length - 1); //to take last value of arraya
console.log(notes.length - 2); //to take 2nd last value of arraya

notes.push("my new note"); //add last item
console.log(notes);

notes.pop(); //removes last item
console.log(notes);

notes.shift(); // removes first item
console.log(notes);

notes.unshift("my first note"); // adds first item
console.log(notes);

notes.splice(1, 1); // first parameter is the index of target item, 2nd parameter is how many you want to delete
console.log(notes);

notes.splice(1, 0, "this is the second item"); // 0 means delete nothing
console.log(notes);

notes[2] = "this is now the new note 3";
console.log(notes);

const wishNote = [
  {
    title: "My next trip",
    body: " I would like to go dubai",
  },
  {
    title: "Habbits to work on",
    body: "Exercise, Learn new skills and Eat better",
  },
  {
    title: "Work modification",
    body: "Need to get a remote job",
  },
];

//findIndex and find are very similar the nly difference is findIndex returns index and find returns value

// const findWish = function (wishNote, wishTitle) {
//   const index = wishNote.findIndex(function (wish, index) {
//     return wish.title.toLowerCase() === wishTitle.toLowerCase();
//   });
//   return wishNote[index];
// };

const findWish = function (wishNote, wishTitle) {
  const wish = wishNote.find(function (wish, index) {
    return wish.title.toLowerCase() === wishTitle.toLowerCase();
  });
  return wish;
};

const wish = findWish(wishNote, "work modification");
// console.log(wish);

const filterNotes = function (filterNote, query) {
  const filter = filterNote.filter(function (note, index) {
    const isTitle = note.title.toLowerCase().includes(query.toLowerCase());
    const isBody = note.body.toLowerCase().includes(query.toLowerCase());

    return isTitle || isBody;
  });

  return filter;
};

// console.log(filterNotes(wishNote, "habbits"), "filter");

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1; // if a is less then b return in assending order
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1; // if b is less then a return in desending order
    } else {
      return 0;
    }
  });
};

sortNotes(wishNote);
console.log(wishNote);
