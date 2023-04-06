// Get the clock element
const clock = document.getElementById("clock");

// function to update the clock

function updateClock() {
  // get the current time
  const now = new Date();

  // format the time as hours minutes and seconds

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  // update the clock element
  clock.textContent = timeString;
}

// Call the function once to initialize the clock.

updateClock();

// update the clock every second

setInterval(updateClock, 1000);
