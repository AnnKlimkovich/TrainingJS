// The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С.
//Log on console both arrays.

var arr = [1, 17, -2, -4, -0.8, 0, 5.5];


var positiveArr = arr.filter(function(number){
 return number > 0;
});

var negativeArr = arr.filter(function(number){
 return number < 0;
});
console.log(positiveArr);
console.log(negativeArr);

