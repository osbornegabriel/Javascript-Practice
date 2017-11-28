// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

var between49And99 = function(n){
  return n > 49 && n < 100;
}

var inRange = function(x,y,z){
  return between49And99(x) || between49And99(y) || between49And99(z);
}