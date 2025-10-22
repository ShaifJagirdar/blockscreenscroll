document.addEventListener('DOMContentLoaded', function() {
    let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function() {
    console.log('Button clicked');
    document.body.classList.toggle('overflow-hidden');
});
});
