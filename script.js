// Typing Animation
const typedText = document.getElementById("typed-text");
const phrases = [
  "Mechatronics Enthusiast",
  "Creative Problem Solver",
  "Future Automation Engineer",
  "Python & Arduino Coder",
  "Engineering Joy with Code!"
];
let phraseIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typedText.textContent += phrases[phraseIndex].charAt(letterIndex++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (letterIndex > 0) {
    typedText.textContent = phrases[phraseIndex].substring(0, --letterIndex);
    setTimeout(erase, 60);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, 1000);
});

// Theme Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll animation for fade-ins
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

faders.forEach((fader) => observer.observe(fader));

// Magnetic Button Hover
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// Click Sparkles
document.body.addEventListener("click", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

function openModal(imageSrc) {
  document.getElementById("img-modal").style.display = "block";
  document.getElementById("modal-img").src = imageSrc;
}

function closeModal() {
  document.getElementById("img-modal").style.display = "none";
}

let zoomLevel = 1;

function zoomIn() {
  zoomLevel += 0.1;
  document.getElementById("modal-img").style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
  zoomLevel = Math.max(0.5, zoomLevel - 0.1); // prevent too small
  document.getElementById("modal-img").style.transform = `scale(${zoomLevel})`;
}

function openModal(imageSrc) {
  document.getElementById("img-modal").style.display = "block";
  const img = document.getElementById("modal-img");
  img.src = imageSrc;
  img.style.transform = `scale(1)`; // reset zoom
  zoomLevel = 1;
}

function closeModal() {
  document.getElementById("img-modal").style.display = "none";
}

function openProfileModal() {
  document.getElementById("profile-modal").style.display = "block";
}

function closeProfileModal() {
  document.getElementById("profile-modal").style.display = "none";
}

// Parallax tilt effect for profile photo
document.querySelector('.profile-pic').addEventListener('mousemove', (e) => {
  const pic = e.currentTarget;
  const rect = pic.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 15;
  const y = (e.clientY - rect.top - rect.height / 2) / 15;
  pic.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
});

document.querySelector('.profile-pic').addEventListener('mouseleave', () => {
  const pic = document.querySelector('.profile-pic');
  pic.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});
