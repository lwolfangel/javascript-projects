let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {Math.floor(Math.random()*11)}
};


let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {Math.floor(Math.random()*11)}

};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {Math.floor(Math.random()*11)}
};

let tardi = {
   name:"Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5, 
   move: function () {return Math.floor(Math.random()*11)}
};


let crew = [superChimpOne, salamander, superChimpTwo, dog, tardi];

//for (item in superChimpOne) {
   //console.log(item + ": " + (superChimpOne[item]));
//}

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function crewReport(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
} 
     
console.log(crewReport(tardi));
   


function fitnessTest(animals) {
   let results = [], numSteps, turns;
   for (let i = 0; i < animals.length; i++) {
      numSteps = 0
      turns = 0
      while(numSteps < 20) {
         numSteps += animals[i].move();
         turns++;
      }
      results.push(`${animals[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results; 
}

let results = fitnessTest(crew);
for(let i = 0; i < results.length; i++) {
   console.log(results[i])
}