/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
const body = document.body;
const div = document.createElement("div");
const h4 = document.createElement("h4");
body.style.padding = "0"
body.style.margin = "0"
div.style.textAlign = "center";
div.style.paddingTop = "50px";
div.style.paddingBottom = "50px";
div.style.backgroundColor = "green";
div.style.margin = "auto";
div.style.marginTop = "27vh";
h4.style.fontSize = "3rem";
div.appendChild(h4);
body.appendChild(div);

function displayCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hour ;
  let beforAfternoon ;
  if(hours > 12){
    hour = hours - 12;
    beforAfternoon = "PM"
  }else {
     hour = hours
    beforAfternoon = "AM"
  }
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  setInterval(displayCurrentTime, 500)
  return h4.textContent = `${hour}:${minutes}:${seconds} ${beforAfternoon}`
}

window.addEventListener("load",displayCurrentTime);

function addZero(time){
  if(time < 10) time = "0" + time;
  else time = time;
  return time
}