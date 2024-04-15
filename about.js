

    let stopwatchDisplay = document.getElementById('stopwatch');
    let startStopButton = document.getElementById('startStop');
    let resetButton = document.getElementById('reset');
    
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let timer;

    function updateStopwatch() {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
        }
        stopwatchDisplay.textContent = 
            (minutes < 10 ? '0' + minutes : minutes) + ':' + 
            (seconds < 10 ? '0' + seconds : seconds) + ':' + 
            (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    }

    function startStopTimer() {
        if (startStopButton.textContent === 'Start') {
            timer = setInterval(updateStopwatch, 10);
            startStopButton.textContent = 'Stop';
        } else {
            clearInterval(timer);
            startStopButton.textContent = 'Start';
        }
    }

    function resetTimer() {
        clearInterval(timer);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        stopwatchDisplay.textContent = '00:00:00';
        startStopButton.textContent = 'Start';
    }

    startStopButton.addEventListener('click', startStopTimer);
    resetButton.addEventListener('click', resetTimer);
 

 
 
