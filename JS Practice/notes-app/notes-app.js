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
