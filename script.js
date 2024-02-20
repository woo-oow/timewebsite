let sys1 = false;

function update() {
    const now = new Date();
    let hours = now.getHours();
    let ampm = '';

    if (sys1) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    } else {
        ampm = '';
        hours = String(hours).padStart(2, '0');
    }

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currtime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('sys').textContent = sys1 ? '12hr' : '24hr';
    document.getElementById('clock-time').textContent = currtime;
}

function swap() {
    sys1 = !sys1;
    update();

    const formatCircle = document.getElementById('format-circle');
    formatCircle.textContent = sys1 ? '12hr' : '24hr';
    formatCircle.style.backgroundColor = sys1 ? '#FFFFFF' : '#000000';
    formatCircle.style.color = sys1 ? '#000000' : '#FFFFFF';
}



update();
setInterval(update, 1000);
