let timerInterval;
let elapsedTimes = {
    stopwatch1: 0,
    stopwatch2: 0
};
let sys1 = true;

function update() {
    const now = new Date();
    let hours = now.getHours();
    let ampm = '';

    if (!sys1) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    } else {
        ampm = '';
        hours = String(hours).padStart(2, '0');
    }

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currtime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('format-circle').textContent = sys1 ? '12hr' : '24hr';
    document.getElementById('clock-time').textContent = currtime;

    document.getElementById('stopwatch1').textContent = formatElapsedTime(elapsedTimes.stopwatch1);
    document.getElementById('stopwatch2').textContent = formatElapsedTime(elapsedTimes.stopwatch2);
}

function startTimer(stopwatch) {
    if (!timerInterval) {
        timerInterval = setInterval(function() {
            elapsedTimes[stopwatch]++;
            update();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer(stopwatch) {
    elapsedTimes[stopwatch] = 0;
    update();
}

function formatElapsedTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function swap() {
    sys1 = !sys1;
    update();
}

update();
setInterval(update, 1000);
