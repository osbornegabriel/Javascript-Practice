// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

var closestToHundred = function(x,y){
  return 100 - x < 100 - y ? x : y;
}