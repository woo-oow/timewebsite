let sys1 = false

function updateClock() {
    if (sys1) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock-time').textContent = timeString;
    }
    else {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0') % 12;
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock-time').textContent = timeString;
    }

}

function swap() {
    sys1 = !sys1
}

updateClock(); // Update the clock immediately
setInterval(updateClock, 1000); // Update the clock every second
