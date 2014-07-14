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
    
    case "undefined":
      return undefined;
      break;
    
    case "boolean":
      return obj.toString();
      break;
    
    case "string":
      return '\"' + obj + '\"';   //ensures that obj is returned in "quotes"
      break;
    
    case "function":
      return undefined;
      break;
      
    case "object":
      var string = '';
      //It's clearer if I placed the code for a null case first
      if(obj == null) {
        return "null";
        
      } else if (Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++){
          if(i < obj.length - 1) {
            string += stringifyJSON(obj[i]) + ",";
          } else {
            string += stringifyJSON(obj[i]);
          }
        }
        //ensures that object is returned in its form [..]
        return "[" + string + "]";
        
      } else{ //the last is key-value pair
        var index = 0;
        for(var key in obj) {
          var keyString = stringifyJSON(obj[key]);
          if(keyString !== '' && keyString !== undefined) {
            //Adding each element one by one because jumbling them together kept
            //giving me an error
            
            if (index > 0) {
              string += ",";
            }
            
            string += "\"" + key + "\"";
            string += ":" ;
            string += keyString;
            
          }index ++;
        } return "{" + string + "}";
      } 
      break;
  }
};
