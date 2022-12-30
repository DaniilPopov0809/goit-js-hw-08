const throttle = require("lodash.throttle");

const feedbackFormEl = document.querySelector(".feedback-form");
const emailEl = feedbackFormEl[0];
const messageEl = feedbackFormEl[1];

const SAVE_KEY = "feedback-form-state";

populateTextArea();
const saveData = { email: emailEl.value, message: messageEl.value };

feedbackFormEl.addEventListener("input", throttle(onFormAreaSave, 500));
feedbackFormEl.addEventListener("submit", onFormSend);

function onFormAreaSave(event) {
  saveData[event.target.name] = event.target.value;
  const jsonSaveData = JSON.stringify(saveData);
  localStorage.setItem(SAVE_KEY, jsonSaveData);
}

function populateTextArea() {
  const textAreas = getSaveValue();
  if (textAreas) {
    if (textAreas.email) {
      emailEl.value = textAreas.email;
    }
    if (textAreas.message) {
      messageEl.value = textAreas.message;
    }
  }
}

function onFormSend(event) {
  event.preventDefault();
  const textAreas = getSaveValue();
  console.log(textAreas);
  localStorage.clear();
  feedbackFormEl.reset();
}

function getSaveValue() {
  return JSON.parse(localStorage.getItem(SAVE_KEY));
}
