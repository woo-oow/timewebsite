let timerInterval;
let stopwatchInterval;
let stopwatchTime = 0;
const stoppedStopwatches = [];

function startTimer() {
  const timeInput = parseInt(document.getElementById("timerInput").value);
  if (!isNaN(timeInput) && timeInput > 0) {
    let remainingTime = timeInput;
    timerInterval = setInterval(() => {
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(timerInterval);
        alert("Timer finished!");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    updateStopwatchDisplay(++stopwatchTime);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stoppedStopwatches.push(stopwatchTime);
  displayStoppedStopwatches();
  stopwatchTime = 0;
  updateStopwatchDisplay(stopwatchTime);
}

function deleteStopwatch(time) {
  const index = stoppedStopwatches.indexOf(time);
  if (index > -1) {
    stoppedStopwatches.splice(index, 1);
    displayStoppedStopwatches();
  }
}

function updateStopwatchDisplay(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.getElementById("stopwatchDisplay").textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}

function displayStoppedStopwatches() {
  const stoppedStopwatchesContainer = document.getElementById("stoppedStopwatches");
  stoppedStopwatchesContainer.innerHTML = stoppedStopwatches.map(time => {
    return `<div>${formatTime(time)}<button onclick="deleteStopwatch(${time})">Delete</button></div>`;
  }).join("");
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}


