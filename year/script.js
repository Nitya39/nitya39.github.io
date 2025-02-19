// Snowfall Generation
const snowContainer = document.getElementById("snow");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Randomize size and position
  const size = Math.random() * 7 + 3 + "px";
  const left = Math.random() * window.innerWidth + "px";

  snowflake.style.width = size;
  snowflake.style.height = size;
  snowflake.style.left = left;

  // Randomize animation duration and delay
  const animationDuration = Math.random() * 4 + 2 + "s";
  const animationDelay = Math.random() * 3 + "s";

  snowflake.style.animationDuration = animationDuration;
  snowflake.style.animationDelay = animationDelay;

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, (parseFloat(animationDuration) + parseFloat(animationDelay)) * 1000);
}

// Create snowflakes at intervals
setInterval(createSnowflake, 100);

// Countdown Timer
const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);

    // Hide the timer
    document.getElementById("timer").style.display = "none";

    // Replace with the New Year message
    const newYearMessage = document.createElement("div");
    newYearMessage.id = "new-year-message";
    newYearMessage.innerHTML = `
      <h1>Happy New Year, Skyline Family!</h1>
      <p>We wish you a prosperous and joyful year ahead. Let’s make 2025 amazing together!</p>
    `;
    document.body.appendChild(newYearMessage);
  }
}, 1000);

// Close popup functionality
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("celebration-popup").style.display = "none";
});
