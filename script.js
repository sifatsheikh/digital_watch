document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.getElementById("time-display");
    const dateDisplay = document.getElementById("date-display");
    const timezoneDisplay = document.getElementById("timezone-display");
    const themeToggle = document.getElementById("theme-toggle");
    const timezoneSelector = document.getElementById("timezone-selector");
  
    // Function to format time to 12-hour format
    function formatTimeTo12Hour(date) {
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
  
    // Function to update the time and date
    function updateTime() {
      const now = new Date();
      const selectedZone = timezoneSelector.value || "Asia/Dhaka";
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedZone,
        timeStyle: "medium",
        dateStyle: "full",
      });
      const parts = formatter.formatToParts(now);
  
      const timeString = formatTimeTo12Hour(new Date(now.toLocaleString("en-US", { timeZone: selectedZone })));
      const fullDate = `${parts[4].value}, ${parts[2].value} ${parts[0].value}, ${parts[6].value}`;
  
      timeDisplay.textContent = timeString;
      dateDisplay.textContent = fullDate;
      timezoneDisplay.textContent = `${selectedZone === "local" ? "Local Time" : selectedZone}`;
    }
  
    // Event listener for the timezone selector
    timezoneSelector.addEventListener("change", updateTime);
  
    // Theme toggle
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  
    // Update time every second
    setInterval(updateTime, 1000);
  
    // Initialize the time display
    timezoneSelector.value = "Asia/Dhaka";
    updateTime();
  });
  






// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements// Stopwatch Elements







  document.addEventListener("DOMContentLoaded", () => {
    // Stopwatch Variables
    let stopwatchInterval;
    let elapsedTime = 0;
    let running = false;
    let lapCount = 1;
  
    // Stopwatch Elements
    const stopwatchTimeDisplay = document.getElementById("stopwatch-time");
    const startStopButton = document.getElementById("start-stop");
    const lapButton = document.getElementById("lap-clear");
    const resetButton = document.getElementById("reset");
    const lapList = document.getElementById("lap-list");
  
    // Countdown Timer Variables
    let countdownInterval;
    let countdownTime = 0;
    const countdownInput = document.getElementById("countdown-input");
    const countdownDisplay = document.getElementById("countdown-display");
    const startCountdownButton = document.getElementById("start-countdown");
  
    // Stopwatch Functionality
    function updateStopwatch() {
      elapsedTime++;
      let minutes = Math.floor(elapsedTime / 60);
      let seconds = elapsedTime % 60;
      stopwatchTimeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  
    function startStopwatch() {
      stopwatchInterval = setInterval(updateStopwatch, 1000);
      startStopButton.textContent = "Stop";
      running = true;
    }
  
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      startStopButton.textContent = "Start";
      running = false;
    }
  
    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      elapsedTime = 0;
      stopwatchTimeDisplay.textContent = "00:00";
      startStopButton.textContent = "Start";
      running = false;
    }
  
    function addLapTime() {
      let minutes = Math.floor(elapsedTime / 60);
      let seconds = elapsedTime % 60;
      const lapItem = document.createElement("li");
      lapItem.classList.add("list-group-item");
      lapItem.textContent = `Lap ${lapCount++}: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      lapList.appendChild(lapItem);
    }
  
    // Countdown Timer Functionality
    function updateCountdown() {
      countdownTime--;
      let minutes = Math.floor(countdownTime / 60);
      let seconds = countdownTime % 60;
      countdownDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.classList.add("active");
        countdownDisplay.textContent = "Time's up!";
      }
    }
  
    function startCountdown() {
      countdownTime = parseInt(countdownInput.value);
      if (isNaN(countdownTime) || countdownTime <= 0) {
        alert("Please enter a valid time in seconds.");
        return;
      }
      countdownInterval = setInterval(updateCountdown, 1000);
    }
  
    // Event Listeners for Stopwatch
    startStopButton.addEventListener("click", () => {
      if (running) {
        stopStopwatch();
      } else {
        startStopwatch();
      }
    });
  
    lapButton.addEventListener("click", () => {
      if (running) {
        addLapTime();
      }
    });
  
    resetButton.addEventListener("click", resetStopwatch);
  
    // Event Listener for Countdown
    startCountdownButton.addEventListener("click", startCountdown);
  });












  // Functionality for Basic Calculator
let display = document.getElementById("calc-display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    addToHistory(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Functionality for Scientific Calculator
let scientificDisplay = document.getElementById("scientific-display");

function appendToScientificDisplay(value) {
  scientificDisplay.value += value;
}

function calculateScientificResult() {
  try {
    scientificDisplay.value = eval(scientificDisplay.value);
    addToHistory(scientificDisplay.value);
  } catch (e) {
    scientificDisplay.value = "Error";
  }
}

// History Panel
function addToHistory(result) {
  let historyList = document.getElementById("history-list");
  let historyItem = document.createElement("li");
  historyItem.classList.add("list-group-item");
  historyItem.textContent = result;
  historyList.prepend(historyItem);
}




