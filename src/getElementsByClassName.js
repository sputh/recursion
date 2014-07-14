// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  //Suggested to use:
  //document.body
  //element.childNodes
  //element.classList
  
  //returns an array-like object of ALL child elements which
  //have all the given class names, searching thru the whole 
  //doc or element
  var collected = []; //the collection of all child elements to be returned
  var classes = [];
  var currentElement = document.body;
  var children = currentElement.childNodes;
  
  for(var i = 0; i < children.length; i++){
    if(children[i].className && children[i].className !== '') {
      classes = children[i].className.split('');
      
      classes.forEach(function(singleClass){
        if(singleClass === className) {
          collected.push(children[i]);
        }
      });
    }
    collected = collected.concat(Document.prototype.getElementsByClassName.call(this, className, children[i]));
  }
  return collected;
};
