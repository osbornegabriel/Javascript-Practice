// 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

// They specified starting with 'Java', no mention of also 'java' so did not code to accomodate matches for it.

var javaStart = function(string){
  return string.slice(0,4) === 'Java';
}