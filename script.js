// get elements from the DOM
const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let intervalId;
let startTime;
let elapsedTime = 0;

// format time as HH:MM:SS
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedSeconds = seconds % 60;
  const formattedMinutes = minutes % 60;
  const formattedHours = hours % 60;

  return (
    `${formattedHours.toString().padStart(2, '0')}:` +
    `${formattedMinutes.toString().padStart(2, '0')}:` +
    `${formattedSeconds.toString().padStart(2, '0')}`
  );
}

function start() {
  // start the stopwatch
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);

  // disable start button
  startBtn.disabled = true;
}

function stop() {
  // stop the stopwatch
  clearInterval(intervalId);

  // enable start button
  startBtn.disabled = false;
}

function reset() {
  // stop the stopwatch
  clearInterval(intervalId);

  // reset elapsed time to 0
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);

  // enable start button
  startBtn.disabled = false;
}

// add event listeners to buttons
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
