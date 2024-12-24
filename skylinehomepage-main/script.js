// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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

setInterval(createSnowflake, 100);

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const toggle = button.querySelector(".faq-toggle");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggle.textContent = "+";
    } else {
      answer.style.display = "block";
      toggle.textContent = "-";
    }
  });
});

const popup = document.getElementById("celebration-popup");
const closePopup = document.getElementById("close-popup");

const lastVisit = localStorage.getItem("lastVisit");
const now = new Date().getTime();
const oneDay = 24 * 60 * 60 * 1000;

if (!lastVisit || now - lastVisit > oneDay) {
  popup.classList.add("active");
  localStorage.setItem("lastVisit", now);
}

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    card.classList.toggle("active");
    const toggle = header.querySelector(".faq-toggle");
    toggle.textContent = toggle.textContent === "+" ? "−" : "+";
  });
});
