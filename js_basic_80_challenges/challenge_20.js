// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.

// Gabe's Note: My solution for this problem is premised on zero not being a considered a positive (or that that matter, negative) number. Briefly reading up on it, that seemed the general consensus.

var posNegIntegers = function(x,y){
  return x * y < 0;
}