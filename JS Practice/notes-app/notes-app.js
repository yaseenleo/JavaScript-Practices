let wishNote = getSavedNotes();

wishNotesJSON = localStorage.getItem("wishNote");

if (wishNotesJSON !== null) {
  wishNote = JSON.parse(wishNotesJSON);
}

console.log(wishNote);
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

renderNotes(wishNote, filter);

document.getElementById("search_text").addEventListener("input", function (e) {
  console.log(e.target.value);
  filter.searchText = e.target.value;
  renderNotes(wishNote, filter);
});

document.querySelector("#name_form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.elements.firstname.value);
  let value = e.target.elements.firstname.value;
  wishNote.push({
    title: value,
    body: "Some task",
  });
  e.target.elements.firstname.value = "";
  saveNotes(wishNote);
  renderNotes(wishNote, filter);
});

document.querySelector("#for_fun").addEventListener("change", function (e) {
  console.log(e.target.checked);
});

document.querySelector("#filter_by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
