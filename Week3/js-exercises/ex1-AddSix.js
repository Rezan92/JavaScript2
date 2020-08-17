/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

function createBase(num) {
  // Put here your logic...
  return function(){
   return num + 9;
  }
}

const addSix = createBase(6);

const addFifteen = createBase(15);
const addTwentySeven = createBase(27);
// Put here your function calls...
console.log(addSix());
console.log(addFifteen());
console.log(addTwentySeven());