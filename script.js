let timerInterval;
let stopwatchInterval;
let stopwatchTime = 0;

function startTimer() {
  const timerInput = document.getElementById("timerInput");
  const timeInSeconds = parseInt(timerInput.value);
  if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
    timerInterval = setInterval(() => {
      timeInSeconds--;
      if (timeInSeconds < 0) {
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
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;
  document.getElementById("stopwatchDisplay").textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}
