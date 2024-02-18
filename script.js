var analog = false;

function updateDateTime() {
    const now = new Date();
}

function changeFormat() {
    const datetime = document.getElementById('datetime');
    analog = !analog
}


updateDateTime();


setInterval(updateDateTime, 1000);
