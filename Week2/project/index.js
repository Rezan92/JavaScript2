/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const log = console.log
const addOne = document.getElementById("add-one");
const subtractOne = document.getElementById("subtract-one");
const sessionLength = document.getElementById("session-length");
const timer = document.getElementById("timer");
const playStop = document.getElementById("play-stop");
const pause = document.getElementById("pause");

let duration = parseFloat(sessionLength.getAttribute("data-sessionLenght"));
let countdown = duration;
let sec = 0;
let validation = true;
let pauseInterval = true;
let value;

addOne.addEventListener("click", addOneToTimer);
subtractOne.addEventListener("click", subtractOneFromTimer);
pause.addEventListener("click", pauseCounter);
playStop.addEventListener("click", playAndStopCounter);

function addOneToTimer() {
  if (validation) {
    duration++;
    if (duration <= 0) {
      sessionLength.textContent = duration;
      timer.textContent = "Time 's up!"
    } else {
      countdown = duration;
      sessionLength.textContent = duration;
      timer.textContent = `${countdown}:0${sec}`;
    };
    return timer.textContent;
  };
};

function subtractOneFromTimer() {
  if (validation) {
    duration--;
    if (duration <= 0) {
      sessionLength.textContent = duration;
      timer.textContent = "Time 's up!"
    } else {
      countdown = duration;
      sessionLength.textContent = duration;
      timer.textContent = `${countdown}:0${sec}`;
    };
    return timer.textContent;
  };
};

function pauseCounter() {
  if (!validation) {
    if (pauseInterval) {
      pause.firstElementChild.style.color = "black";
      clearInterval(intervalId);
    } else {
      pause.firstElementChild.style.color = "white";
      intervalId = setInterval(counter, 1000);
    }
    pauseInterval = !pauseInterval;
  }
}

function playAndStopCounter() {
  if (validation) {
    playStop.firstElementChild.className = "fa fa-stop"
    intervalId = setInterval(counter, 1000);
  } else {
    clearInterval(intervalId);
    playStop.firstElementChild.className = "fa fa-play";
    pause.firstElementChild.style.color = "white";
    pauseInterval = true;
    if (duration <= 0) {
      timer.textContent = "Time 's up!";
    } else {
      countdown = duration;
      sec = 0;
      timer.textContent = `${countdown}:0${sec}`;
    }
  }
  return validation = !validation;
};

function counter() {
  sec--;
  if (duration <= 0) {
    clearInterval(intervalId);
    sec = 0;
    return timer.textContent = "Time 's up!";
  } else if (countdown <= 0 && sec <= 0) {
    clearInterval(intervalId);
    return timer.textContent = "Time 's up!";
  } else if (sec < 10) {
    if (sec < 0) {
      sec = 59;
      countdown--;
      return timer.textContent = `${countdown}:${sec}`;
    } else {
      sec = "0" + sec;
      return timer.textContent = `${countdown}:${sec}`;
    };
  } else {
    return timer.textContent = `${countdown}:${sec}`;
  };
};