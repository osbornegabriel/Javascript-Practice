// 31. Write a JavaScript program to find the largest of three given integers.  Go to the editor

var largestNum = function(x,y,z){
  var largest = x;
  if(y > largest){
    largest = y;
  }
  if(z > largest){
    largest = z;
  }
  return largest;
}