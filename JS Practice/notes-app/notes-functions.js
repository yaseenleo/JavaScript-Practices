//Read existing notes from the localStorage

const getSavedNotes = () => {
  wishNotesJSON = localStorage.getItem("wishNote");

  if (wishNotesJSON !== null) {
    return JSON.parse(wishNotesJSON);
  } else {
    return [];
  }
};

//Save notes to localStorage
const saveNotes = function (note) {
  localStorage.setItem("wishNote", JSON.stringify(note));
};

//Generate the DOM structure for a note

const generateNoteDOM = (note) => {
  const nodeEl = document.createElement("p");

  if (note.title.length > 0) {
    nodeEl.textContent = note.title;
  } else {
    nodeEl.textContent = "unnamed note";
  }

  return nodeEl;
};

//Render application notes
const renderNotes = function (notes, filters) {
  const filterNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.getElementById("notes").innerHTML = " ";

  filterNotes.forEach(function (note) {
    const nodeEl = generateNoteDOM(note);

    document.querySelector("#notes").appendChild(nodeEl);
  });
};
