const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayActive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayActive");
};

const copyProfileLink = () => {
  navigator.clipboard.writeText("https://codewiznik-profile.onrender.com");
  alert("Profile link copied to clipboard!");
};


//   Typing  Element

const typingElement = document.getElementById("typing");
const phrases = ["Frontend Developer", "MERN Stack Learner", "Tech YouTuber"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loop() {
  typingElement.textContent = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 50 : 150);
}
loop();
