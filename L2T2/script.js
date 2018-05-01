//The numeric array is given. You should find amount of reps for each element in the array and log it on
//console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1]
//you should log:  1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)

var arr = [1, 3, 5, 6, 3, 2, -1, 5];
var count ={};

arr.forEach(function(item) {
  count[item] = count[item] + 1 || 1
});

console.log(count);


