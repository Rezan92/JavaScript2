/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

const body = document.body;
body.style.fontFamily = "Arial, sans-serif";

const nickName = document.getElementById("nickname");
const favFood = document.getElementById("fav-food");
const homeTown = document.getElementById("hometown");

nickName.textContent = " RayRay";
favFood.textContent = " Biryani";
homeTown.textContent = " Poyraz Ogly";

const list = document.querySelectorAll("li");
list.forEach(li => {
  li.classList.add("list-item");
});

const img = document.createElement("img");
const ul = document.querySelector("ul");
img.setAttribute("src", "./assets/rezan.jpg");
document.body.insertBefore(img, ul);
img.style.width = "200px";