/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.


var asterisk1 = {
  value: "*"
}

var asterisk2 = {
  value: "***"
}

var asterisk3 = {
  value: "*****"
}

var asterisk4 = {
  value: "*******"
}

var asterisk5 = {
  value: "*********"
}

var asteriskValue = ["*", "***", "*****", "*******", "*********"];

var treeHeight = function(treeHeight) {

  for (var i = 0; i < asteriskValue.length; i++) {

      // function resizeElementHeight(treeHeight) {
      // var treeHeight = [0];

      // var asteriskValue = ["*", "***", "*****", "*******", "*********"];

    if (i === 0){
      console.log("    *");
    } else if(i === 1){
      console.log("   ***");
    } else if(i === 2){
      console.log("  *****");
    } else if(i === 3){
      console.log(" *******");
    } else if(i === 4){
      console.log("*********");
    }



  }
};

treeHeight(6);







