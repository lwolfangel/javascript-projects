let numbers = [2, -5, 13, 42];
let total = 0;
let reversed = ''

for (let i = 0; i < numbers.length; i++) {
   reversed = (numbers.split('') + reversed) ;
}
 console.log(reversed)

 //stringName.split('delimiter')