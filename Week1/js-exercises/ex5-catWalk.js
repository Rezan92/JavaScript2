/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

const catImage = document.querySelector("img");
const screenWidth = window.innerWidth;
let currentPosition = 0;
catImage.style.left = currentPosition + "px";
document.body.style.overflowX = "hidden";

function catWalk() {
  currentPosition += 10;

  if (
    (currentPosition + (catImage.width / 2)) > ((screenWidth / 2) - 1) &&
    (currentPosition + (catImage.width / 2)) < ((screenWidth / 2) + 10)) {
    clearInterval(intervalid);
    catImage.src = "https://dancingcat-sandbox.mxapps.io/img/MyFirstModule$Images$cat_dance.gif?637186727895195440";

    setTimeout(() => {
      intervalid = setInterval(catWalk, 50); //why when I change this line to "setInterval(catWalk, 50);" instead of "intervalid = setInterval(catWalk, 50);" the cat run faster?
      catImage.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    }, 5000);

  } else if (currentPosition >= screenWidth) {
    currentPosition = -285;
  }

  return catImage.style.left = currentPosition + "px";
};

intervalid = setInterval(catWalk, 50);



