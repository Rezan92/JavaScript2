/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*
1 - When we declared the variable x we asigned it to a function and we called it right away (x=(function)(call function)).
2 - The function contain a closure, the closure give the inner function reference to all the variables in the lexical environment(the parent function in this case),
    in the parent function we reassign the variable a to 12 the inner function sees that and use it in the alert.
3 - The line 14 will return the inner function (closure), and at the line 21 we call the returned function ( the inner function) which will alert 12.
*/