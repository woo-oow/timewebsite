let sys1 = false;

function update() {
    
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let currtime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('sys').textContent = '24hr';

    if (sys1) {
        
        hours %= 12;
        currtime += hours < 12 ? ' am' : ' pm';
        document.getElementById('sys').textContent = '12hr';
    }

    document.getElementById('clock-time').textContent = currtime;
}

function swap() {
    sys1 = !sys1;
    update();
}

update();
setInterval(update, 1000);
