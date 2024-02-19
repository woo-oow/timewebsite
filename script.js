// Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);

// Timer
let timerInterval;
function startTimer() {
    const timeInput = document.getElementById('timer-input').value;
    let time = parseInt(timeInput, 10);
    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid time in seconds.');
        return;
    }

    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            alert('Timer done!');
        } else {
            time--;
            document.getElementById('timer-input').value = time;
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = Math.floor(stopwatchTime / 3600);
        const minutes = Math.floor((stopwatchTime % 3600) / 60);
        const seconds = stopwatchTime % 60;
        document.getElementById('stopwatch-time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}
function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-time').textContent = '00:00:00';
}
