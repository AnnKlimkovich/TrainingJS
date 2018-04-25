var a = -6;
var b = -5;
var c = -1;

var D = b * b - 4 * a * c;
var x1 = (- b + Math.sqrt(D))/2/a;
var x2 = (- b - Math.sqrt(D))/2/a;

if (D > 0)  {
   console.log('2 roots:', 'X1 = ', x1, 'and X2 = ', x2);
   }
   else {
    if (D == 0) {
      console.log('1 root X1 = ',x1);
    } else {
       console.log('no roots');
   }
}
