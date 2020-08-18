/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
1 - The first function will throw an error because we are reassigning a variable declared using the keyword const which is not allowed in JavaScript.
2 - The second function will add 1 to the property x of the object y, in this case y is still the same object we are not reassigning it, we are adding 1 to its property which is allowed in JavaScript.
*/