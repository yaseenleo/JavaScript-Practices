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

// DOM Document Object Model

//query and remove
// const p = document.querySelector("p"); // select the first element
// console.log(p);

// p.remove();

// query all and remove
const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
  p.textContent = "*********";
  //   console.log(p.textContent);
  //   p.remove();
});

const createParagraph = document.createElement("p");
createParagraph.textContent = "This is a new element from javascript";
document.querySelector("body").appendChild(createParagraph);

const textBtn = document
  .querySelector("#create_note")
  .addEventListener("click", function (e) {
    console.log("Button has been clicked");
    e.target.textContent = "Success";
  });

document.getElementById("delete_note").addEventListener("click", function () {
  console.log("delete click");
  document.querySelectorAll(".notes").forEach(function (note) {
    note.remove();
  });
});

const filter = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filterNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.getElementById("notes").innerHTML = " ";

  filterNotes.forEach(function (note) {
    const nodeEl = document.createElement("p");
    nodeEl.textContent = note.title;
    document.querySelector("#notes").appendChild(nodeEl);
  });
};

renderNotes(wishNote, filter);

document.getElementById("search_text").addEventListener("input", function (e) {
  console.log(e.target.value);
  filter.searchText = e.target.value;
  renderNotes(wishNote, filter);
});
