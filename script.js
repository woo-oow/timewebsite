let sys1 = false;

function update() {

    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');a
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let currtime = `${hours}: ${minutes}: ${seconds}`;

    if (sys1) {

        hours %= 12;
        currtime += hours < 12 ? ' am' : ' pm';

    }
    document.getElementById('clock-time').textContent = currtime;
}

function swap() {
    sys1 = !sys1;
    update();
}

update(); 
setInterval(updateClock, 1000); 
