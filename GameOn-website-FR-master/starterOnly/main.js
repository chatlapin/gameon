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

//querySelector를 활용하여, HTML 엘리먼트 정보를 가져온다.
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordRetype = document.querySelector("#password-retype");
const button = document.querySelector("button");
const successMessage = document.querySelector(".success-message");
const failureMessage = document.querySelector(".failure-message");
const mismatchMessage = document.querySelector(".mismatch-message");
const requiredMessage = document.querySelector(".required-message");

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



