// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

var sumOrTrip = function(x,y){
  return x === y ? x * 3 : x + y;
}