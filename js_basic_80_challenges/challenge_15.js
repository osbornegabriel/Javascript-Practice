// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

var difThirteen = function(n){
  return n > 13 ? (n - 13) * 2 : 13 - n;
}

console.log(difThirteen(-4))