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
  
  var result = [];
  //need to create a recursive function because I don't know how nested the 
  //class may be
  
  var getElements = function(nodes){ //doc.body
    if (nodes !== undefined) {
      var classList = nodes.classList;  //grabs all the classes
      var children = nodes.childNodes;
      if(nodes.length) {
        for(var i = 0; i < nodes.length; i++) {
          if(nodes[i].classList !== undefined) {
            getElements(nodes[i]);
          }
        }
      } else{
        if(classList) {
          if(classList.contains(className)) {
            result.push(nodes);
          }
        } getElements(children);
      }
    }
  }; 
  getElements(document.body);
  return result;
};
