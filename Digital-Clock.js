  // Global variables
  let clockInterval;
  let stopwatchInterval;
  let stopwatchTime = 0;
  let stopwatchRunning = false;

  // Function to display current time
  function displayTime() {
    let now = new Date();
    let date = now.toDateString();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = ' - '+hours + ' :' + minutes + ' : ' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = date + ' ' + time;
  }

  // Function to start the clock
  function startClock() {
    clockInterval = setInterval(displayTime, 1000);
  }

  // Function to stop the clock
  function stopClock() {
    clearInterval(clockInterval);
  }

  // Function to show UTC time in popup
  function showUTCTime() {
    let now = new Date();
    let utcTime = now.toUTCString();
    alert('UTC Time: ' + utcTime);
  }

  // Function to toggle the stopwatch start/stop
  function toggleStopwatch() {
    if (stopwatchRunning) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
  }

  // Function to start the stopwatch
  function startStopwatch() {
    if (!stopwatchRunning) {
      stopwatchInterval = setInterval(updateStopwatch, 10);
      stopwatchRunning = true;
    }
  }

  // Function to update the stopwatch time
  function updateStopwatch() {
    stopwatchTime += 10;
    let minutes = Math.floor((stopwatchTime / 60000) % 60);
    let seconds = Math.floor((stopwatchTime / 1000) % 60);
    let milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    document.getElementById('stopwatch').innerHTML = minutes + ' :' + seconds + ' : ' + milliseconds;
  }

  // Function to stop the stopwatch
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }

  // Function to reset the stopwatch
  function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatch').innerHTML = '00 : 00 : 00';
  }

  // Start the clock
  startClock();