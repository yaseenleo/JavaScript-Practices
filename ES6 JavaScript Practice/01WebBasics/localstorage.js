// localStorage.clear()    this clears the entire local storage

// localStorage.setItem('hero','thor');
localStorage.setItem('todo','Buy Ice Tea');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','record videos')

console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');
console.log(myHero);
