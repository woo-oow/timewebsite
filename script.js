let sys1 = false;

function update() {

    const now = new Date();
    let hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    let currtime = `${hours}: ${minutes}: ${seconds}`;

    if (sys1) {


        hours %= 12;
        
        if (hours < 12) {
            document.getElementById('sys').textContent = ' am';
            currtime += ' am'
        }
            
        else {
            document.getElementById('sys').textContent = 'pm';
            currtime += ' pm'
        }

    }
    
    document.getElementById('clock-time').textContent = currtime;
    
}

function swap() {
    sys1 = !sys1;
    update();
}

update(); 
setInterval(update, 1000); 
