function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}

function toggleDate() {
    const datetime = document.getElementById('datetime');
    datetime.textContent = datetime.textContent.includes(',') ? datetime.textContent.split(',')[1] : new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function toggleTime() {
    const datetime = document.getElementById('datetime');
    datetime.textContent = datetime.textContent.includes(',') ? new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
}

function changeFormat() {
    const datetime = document.getElementById('datetime');
    datetime.textContent = datetime.textContent.includes(',') ? new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' }) : new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Initial call to update date and time
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);
