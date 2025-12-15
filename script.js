const text = [
  "Web Developer",
  "Front-End Enthusiast",
  "JavaScript Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 150);
  }

  setTimeout(type, 400);
})();
// smooth scroll JS
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
// scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");

// function getMessageText() {
//   return `Hello, I'm ${nameInput.value}%0AEmail: ${emailInput.value}%0A%0AMessage:%0A${messageInput.value}`;
// }

// SEND EMAIL
document.getElementById("sendEmail").addEventListener("click", () => {
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill all fields!");
    return;
  }

  const mailtoURL =
    `mailto:ilhamfaqot1223@gmail.com?subject=Portfolio Contact&body=${getMessageText()}`;

  window.location.href = mailtoURL;
});

// SEND WHATSAPP
document.getElementById("sendWhatsApp").addEventListener("click", () => {
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill all fields!");
    return;
  }

  // GANTI nomor WA kamu
  const whatsappNumber = "6285710236985";
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${getMessageText()}`;

  window.open(whatsappURL, "_blank");
});

// certificate fullscreen modal
const certImages = document.querySelectorAll(".cert-img");
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("certModalImg");
const closeBtn = document.querySelector(".cert-close");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close when clicking outside image
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// close with ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// === HAMBURGER MENU FIX ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// auto close saat klik menu
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

