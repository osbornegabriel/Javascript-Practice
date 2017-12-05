// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same.

var sameLastDigit = function(x,y,z){
  x = String(x);
  y = String(y);
  z = String(z);
  return x[x.length] == y[y.length] && x[x.length] == z[z.length];
}

console.log(sameLastDigit(35,105,5));