// Write your solution here!
let pets = ["Milo", "Otis", "Garfield"];

let append = [...pets, 'Odie'];
const prepend = ['Odie', ...pets];
const removeLast = pets.slice(0,pets.length-1);
const removeFirst = pets.slice(1);