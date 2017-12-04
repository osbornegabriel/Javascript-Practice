// Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.

var withinSpecified = function(numbers,min,max){
  var i;
  for(i = 0; i < inRange.length; i ++){
    if(numbers[i] < min || numbers[i] > max){
      return false;
    }
  }
  return true;
}

var inRange = function(x,y){
  return withinSpecified([x,y],40,60) || withinSpecified([x,y],70,100)
}