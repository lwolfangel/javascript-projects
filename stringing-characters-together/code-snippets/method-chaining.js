//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase())


//Experiment with other combinations (chains) of string methods.
let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);


console.log(language.slice(1,6))


let org = " The Launchcode Foundation ";
let trimmed = org.trim();

 console.log(trimmed);