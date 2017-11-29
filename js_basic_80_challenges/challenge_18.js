// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

var fiftyCent = function(x,y){
  if(x === 50 || y === 50){
    return true;
  }
  else if (x + y === 50){
    return true;
  }
  else{
    return false;
  }
}