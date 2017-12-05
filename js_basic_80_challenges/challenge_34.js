// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// They didn't write to check that the arguments are within a range of 40 and 60, just that they are. I stuck to simply returning which number is bigger, anything beyond that would be superfluos to the task assigned.

var largerNum = function(x,y){
  return x > y ? x : y
}