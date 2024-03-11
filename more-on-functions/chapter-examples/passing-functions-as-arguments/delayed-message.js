/*function printMessage() {
    console.log("Hello, I'm from the future.");
}

setTimeout(printMessage, 10000);

setTimeout(function() {
    console.log("The future is now!");
}, 5000);*/

let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);

