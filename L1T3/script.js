var n = 5;

var S = 1;

if (n === 0) {
 S = 1;

} else {
    for (var i = 2; i<=n; i++) {
     S = S + 1/i;

    }
}
console.log('S = ', S);