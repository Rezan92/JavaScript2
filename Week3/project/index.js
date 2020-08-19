// Your code goes in here
const log = console.log;
const billInput = document.getElementById("bill-input");
const serviceInput = document.getElementById("service");
const peopleInput = document.getElementById("people");
const submitBtn = document.getElementById("calc-btn");
const tip = document.getElementById("tip");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("close-modal");

submitBtn.addEventListener("click", tipCalculator);
modalBtn.addEventListener("click", closeModal);
window.addEventListener("click", ()=>{
  submitBtn.classList.remove("btn")
})

function tipCalculator(e) {
  e.preventDefault();
  const billAmount = parseFloat(billInput.value);
  const serviceQuality = parseFloat(serviceInput.value);
  const numberOfPeople = parseFloat(peopleInput.value);
  const tottalTip = (((serviceQuality / 100) * billAmount) + billAmount).toFixed(2);

  if (isNaN(billAmount) || isNaN(serviceQuality)) {
    addClassToSubmitBtn()
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 50);

  } else {
    if (numberOfPeople === 1) {
      addClassToSubmitBtn()
      tip.innerHTML = `TIP AMOUNT<br>$ ${tottalTip}`;
    } else {
      addClassToSubmitBtn()
      tip.innerHTML = `TIP AMOUNT<br>$ ${tottalTip / numberOfPeople}<br> each`;
    }
  }
}

function closeModal() {
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

function addClassToSubmitBtn(){
  setTimeout(()=>{   //I use setTimeout so when we click on submitBtn this function will run after the window event handler(line 13).
    submitBtn.classList.add("btn") // This class will just add a different background color to submitBtn when we click it.
  },0)
}
