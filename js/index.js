const page = document.querySelector("body");
const modal = document.querySelector(`.modal`);
const backdrop = document.querySelector(`.js-backdrop`);
const openModal = document.querySelector(`[data-action="open-modal"]`);
const closeModal = document.querySelector(`[data-action="close-modal"]`);

openModal.addEventListener("click", toggleClass);
closeModal.addEventListener("click", toggleClass);
backdrop.addEventListener("click", toggleClass);

function toggleClass(event) {
  document.body.classList.toggle("show-modal");
}

const redColor = document.querySelector(`[value="red"]`);
const whiteColor = document.querySelector(`[value="white"]`);
const greenColor = document.querySelector(`[value="green"]`);
const blackColor = document.querySelector(`[value="black"]`);

redColor.addEventListener("focus", () => {
  page.style.backgroundColor = "red";
});
whiteColor.addEventListener("focus", () => {
  page.style.backgroundColor = "white";
});
greenColor.addEventListener("focus", () => {
  page.style.backgroundColor = "green";
});
blackColor.addEventListener("focus", () => {
  page.style.backgroundColor = "black";
});

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  if (inputName.value === "") {
    outputName.textContent = "незнайомець";
  } else {
    outputName.textContent = inputName.value;
  }
});

const inputELement = document.querySelector("#validation-input");

inputELement.addEventListener("blur", (event) => {
  if (event.target.value.length > event.target.dataset.length) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
});

const fontSizeInput = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

fontSizeInput.addEventListener("input", (event) => {
  fontSizeText.style.fontSize = `${event.target.value}px`;
});
