let sys1 = false;

function update() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = 'am';

    if (sys1) {
        ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12; 
    }

    const currtime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('sys').textContent = sys1 ? '12hr' : '24hr';
    document.getElementById('clock-time').textContent = currtime;
}

function swap() {
    sys1 = !sys1;
    update();
}

update();
setInterval(update, 1000);
