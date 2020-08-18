/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr){
 const newArray = arr.filter((a, b) => arr.indexOf(a) === b);
 arr.splice(0, arr.length); 
 newArray.forEach(ele => arr.push(ele));
 return arr
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters); //output letters = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")

  console.log(letters === ['a', 'b', 'c', 'd', 'e', 'f'])// false, why?
  console.log(['a', 'b', 'c', 'd', 'e', 'f'] === ['a', 'b', 'c', 'd', 'e', 'f'])// false, why?