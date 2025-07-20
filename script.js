const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Open Modal
const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayActive");
};

// Close Modal
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayActive");
};

// Copy Profile Link
const copyProfileLink = () => {
  navigator.clipboard.writeText("https://codewiznik-profile.onrender.com/")
    .then(() => alert("✅ Profile link copied to clipboard!"))
    .catch(err => console.error("Clipboard copy failed: ", err));
};

// Typing Effect
const typingElement = document.getElementById("typing");
const phrases = [
  "MERN Dev 🚀",
  "YouTuber 🎥",
  "CodeWizNik ✨"
];
let i = 0, j = 0, isDeleting = false, currentText = "";

const typeLoop = () => {
  const fullPhrase = phrases[i];

  if (isDeleting) {
    currentText = fullPhrase.substring(0, j--);
  } else {
    currentText = fullPhrase.substring(0, j++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && j === fullPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, 1500); // Pause after typing
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  const speed = isDeleting ? 50 : 150;
  setTimeout(typeLoop, speed);
};

document.addEventListener("DOMContentLoaded", typeLoop);
