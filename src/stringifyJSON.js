// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//First thing JSON.stringify() does is convert a value to JSON
var stringifyJSON = function(obj) {
  // your code goes here
  /*var string;
  if(obj.typeof() == 'num') {
      string = obj;
  } else if(obj.typeof() == 'obj') {
      for(var key in obj) {
          string += key + " " + obj[key];
      }
  } else if(obj.typeof() == 'array') {
      for(var i = 0; i < obj.length; i++) {
          if(i != obj.length -1) {
              string += obj[i] + " ";
          } else {
              string += obj[i]
          }
      }
  } 
  else if(obj.typeof() == 'boolean') {
      if(obj == 'true') {
          return string = "true";
      } else {
          return string = "false";
      }
  }
  return string;*/
  return obj.stringifyJSON();

};
