// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.

//JSON works on (1)numBER (2) strings (3) boolean 
//(4) objects--key-value pairs or arrays 

//JSON doesn't work on (1) undefined (2) functions

//creating a function for recursion

var stringifyJSON = function(obj) {
  switch(typeof(obj))
  {
    case "number":
      return obj.toString();
      break;
    
    case "string":
      return '\"' + obj + '\"';   //ensures that obj is returned in "quotes"
      break;
    
    case "boolean":
      return obj.toString();
      break;
    
    //Before moving to objects, tackle the easier options -- undefined(s)  
    case "undefined":
      return undefined;
      break;
    
    case "function":
      return undefined;
      break;
      
    case "object":
      if(Array.isArray(obj)) {
        var string;
        for(var i = 0; i < obj.length; i++){
          string += obj[i] + " ";
        }
      } else if(obj == null) {
        return "null";
      }
      
  }
};
