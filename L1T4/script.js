var a = 123;

var x = '';

while(a>0){
 x = x + (a%10);
 a = parseInt(a/10);
}
console.log(x);
