  // 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  Go to the editor

  String.prototype.pop = function(){
    return this.slice(0, this.length - 1);
  }

  String.prototype.rotate = function(){
    var letter = this[this.length - 1];
    var word = this.pop();
    return letter + word;
  }


  var string = 'w3resource'
  console.log(string);

  for(var i = 0; i < string.length; i ++){
    string = string.rotate();
    console.log(string);
  }