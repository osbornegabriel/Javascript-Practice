// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

var firstCharSandwich = function(s){
  var firstChar =  s.slice(0,1);
  return firstChar + s + firstChar;
}