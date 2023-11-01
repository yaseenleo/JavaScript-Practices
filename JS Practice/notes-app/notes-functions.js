console.log(uuidv4());

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

// console.log(wishNotesJSON);

// remove notes list
const removeNote = function (id) {
  const noteIndex = wishNote.findIndex(function (notes) {
    return notes.id === id;
  });

  if (noteIndex > -1) {
    wishNote.splice(noteIndex, 1);
  }
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

//Generate the DOM structure for a note

const generateNoteDOM = (note) => {
  const nodeEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", function () {
    removeNote(note.id);
    saveNotes(wishNote);
    renderNotes(wishNote, filter);
  });

  // Setup the remove note button
  button.textContent = "x";
  nodeEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    nodeEl.textContent = "unnamed note";
  }

  nodeEl.appendChild(textEl);

  return nodeEl;
};
