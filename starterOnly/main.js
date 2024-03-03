function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
firsr.onkeyup = function () { //이 함수는 eventhandler
  if (isMoreThan2Length(firsr.value)) {
    //css창에서 .hide{display:none;}이 기본값
    successMessage.classList.remove("hide");
    failureMessage.classList.add("hide");
  }
  else {
    failureMessage.classList.remove("hide");
    successMessage.classList.add("hide");
  }
}

function isMoreThan2Length(value) { //value값이 2글자이상이면 true반환
  return value.length >= 2
}


function launchModal() {
  modalbg.style.display = "block";
}

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  console.log("close");
  // debugging
  modalbg.style.display = "none";
}



