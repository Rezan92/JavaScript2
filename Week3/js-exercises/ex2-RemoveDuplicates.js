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

console.log(removeDuplicates(letters));
if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")