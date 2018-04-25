var a = 17;

if (a == 1) {
 console.log('false')
} else {
    for (var i = 2; i*i<=a; i++) {
    if (a % i == 0) {
     console.log('false');
    }
    if (a % i != 0) {
      console.log('true');
    }

    }

}
