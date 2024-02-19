let sys1 = false;
let twelvehr = document.getElementById('twelvehr');

function updateClock() {
    if (sys1) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}: ${minutes}: ${seconds}`;
        
        document.getElementById('clock-time').textContent = timeString;
        
        if (hours <= 12) {
            contentDiv.textContent = 'am';
        else {
            contentDiv.textContent = 'pm';
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
    sys1 = !sys1;
}

updateClock(); 
setInterval(updateClock, 1000); 
