//Algorithms for tasks 1 and 2 implement as functions with one argument.
//Run both function with the same  array in one script.js file.

var arr = [1, 17, -2, -4, 0, 0, 5.5, 17, -2];
var count ={};


var arrB = arr.filter(Positive);
var arrC = arr.filter(Negative);

arr.forEach(Reps);

function Positive(number) {
 return number > 0;
}
function Negative(number){
 return number < 0;
}

function Reps(item) {
  count[item] = count[item] + 1 || 1
}




console.log("array В:", arrB);
console.log("array c:", arrC);
console.log(count);