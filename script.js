let sys1 = false;

function updateClock() {

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currtime = `${hours}: ${minutes}: ${seconds}`;

    if (sys1) {

        hours %= 12

        currtime += sys1 ? ' am' : ' pm';

    }
    document.getElementById('clock-time').textContent = currtime;
}

function swap() {
    sys1 = !sys1;
    updateClock();
}

updateClock(); 
setInterval(updateClock, 1000); 
