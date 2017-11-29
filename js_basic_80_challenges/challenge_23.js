// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.

var frontBackSwap = function(s){
  var firstChar =  s.slice(0,1);
  var lastChar = s.slice(s.length - 1);
  var middle =  s.slice(1, s.length - 1)
  return lastChar + middle + firstChar;
}