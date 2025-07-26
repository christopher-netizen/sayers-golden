// Scroll animations delay for fade-ins
document.querySelectorAll(".fade-in").forEach((el, i) => {
  setTimeout(() => (el.style.animationDelay = `${i * 0.2}s`), i * 200);
});

// "Adopt Now" button opens email client
document.getElementById("buyBtn").addEventListener("click", () => {
  window.location.href =
    "mailto:christopher@sayersgolden.com?subject=I want to adopt a Golden Retriever Puppy&body=Hello, I am interested in adopting a puppy. Please send me more details!";
});

// Simple Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});

// Fullscreen Image Modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Countdown Timer (5 days from now)
const countdownElement = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 5);

function updateCountdown() {
  const now = new Date();
  const diff = deliveryDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h3>Expected Delivery Date Has Arrived!</h3>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.days.textContent = days;
  countdownElement.hours.textContent = hours;
  countdownElement.minutes.textContent = minutes;
  countdownElement.seconds.textContent = seconds;
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Shrink header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
