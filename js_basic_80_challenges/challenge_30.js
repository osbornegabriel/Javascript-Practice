// 30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

var hasScript = function(s){
  if(s.slice(4,10) == "Script"){
    return s.slice(0,4) + s.slice(10);
  } else{
    return s;
  }
}