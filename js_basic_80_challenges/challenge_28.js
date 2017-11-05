// 28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.  Go to the editor
// Click me to see the solution

var twoNumsInRange = function(x,y){
  firstInRange = x > 49 && x < 100;
  secondInRange = x > 49 && x < 100;
  return firstInRange && secondInRange;
}


// Could make DRYer with:

// var numInRange = function(n){
//   return n > 49 && n < 100;
// }

// var twoNumsInRange = function(x,y){
//   return numInRange(x) && numInRange(y);
// }