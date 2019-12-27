console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.URL);

document.title = 'I got changed'

console.log(document.getElementById('idone'));
console.log(document.getElementsByClassName('classone'));

const myElement = document.querySelector('p');
console.log(myElement);

const myElements = document.querySelectorAll('p');
console.log(myElements[1]);

const myElementsId = document.querySelectorAll('#idone');
console.log(myElementsId[0]);

const myElementsClass = document.querySelectorAll('.classone');
console.log(myElementsClass[0]);

const pElement = document.querySelector('p')
pElement.textContent = 'i am being changed by JS';

const pElements = document.querySelectorAll('p');

// pElements.forEach(function(p){
//     p.textContent = ' i am chanegd using JS loop';
//     // p.remove()
// })

pElements.forEach((p) => p.textContent = 'i am being changed by JS loop, arrow function')