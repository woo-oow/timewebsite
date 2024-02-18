var analog = false;

function updateDateTime() {
    const now = new Date();
}


function changeFormat() {

    analog = !analog
    
    
    if (format === 'analog') {
        // Do something for analog format
        alert('Switching to analog format!');
    } else {
        // Do something for other formats
        alert('Switching to another format!');
    }
}


updateDateTime();


setInterval(updateDateTime, 1000);
