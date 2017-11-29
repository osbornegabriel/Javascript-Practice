// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

var removeChar = function(string, index){
  return string.slice(0,index) + string.slice(index + 1);
}