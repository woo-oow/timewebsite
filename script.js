let timer_interval;
let stopwatch_interval;
let stopwatch_time = 0;
let stopped_stopwatches = [];

function start_timer() {
  const timer_input = document.getElementById("timerInput");
  const time_in_seconds = parseInt(timer_input.value);
  if (!isNaN(time_in_seconds) && time_in_seconds > 0) {
    timer_interval = setInterval(() => {
      time_in_seconds--;
      if (time_in_seconds < 0) {
        clearInterval(timer_interval);
        alert("Timer finished!");
      }
    }, 1000);
  }
}

function stop_timer() {
  clearInterval(timer_interval);
}

function start_stopwatch() {
  stopwatch_interval = setInterval(() => {
    stopwatch_time++;
    update_stopwatch_display();
  }, 1000);
}

function stop_stopwatch() {
  clearInterval(stopwatch_interval);
  stopped_stopwatches.push(stopwatch_time);
  display_stopped_stopwatches();
  stopwatch_time = 0;
  update_stopwatch_display();
}

function update_stopwatch_display() {
  const hours = Math.floor(stopwatch_time / 3600);
  const minutes = Math.floor((stopwatch_time % 3600) / 60);
  const seconds = stopwatch_time % 60;
  document.getElementById("stopwatchDisplay").textContent = `${pad_zero(hours)}:${pad_zero(minutes)}:${pad_zero(seconds)}`;
}

function pad_zero(num) {
  return num.toString().padStart(2, "0");
}

function display_stopped_stopwatches() {
  const stopped_stopwatches_container = document.getElementById("stoppedStopwatches");
  stopped_stopwatches_container.innerHTML = "";
  stopped_stopwatches.forEach((time, index) => {
    const stopwatch_div = document.createElement("div");
    stopwatch_div.textContent = `${pad_zero(Math.floor(time / 3600))}:${pad_zero(Math.floor((time % 3600) / 60))}:${pad_zero(time % 60)}`;
    const delete_button = document.createElement("button");
    delete_button.textContent = "Delete";
    delete_button.onclick = () => {
      stopped_stopwatches.splice(index, 1);
      display_stopped_stopwatches();
    };
    stopwatch_div.appendChild(delete_button);
    stopped_stopwatches_container.appendChild(stopwatch_div);
  });
}
