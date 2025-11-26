let hours = 0, minutes = 0, seconds = 0;
let timer = null;
let isRunning = false;

// Update Display Function
function updateDisplay() {
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Start Timer
function startTimer() {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;

    timer = setInterval(() => {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

// Stop Timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Event Listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
