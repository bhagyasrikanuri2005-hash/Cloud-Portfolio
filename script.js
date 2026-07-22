// ============================
// Mobile Menu
// ============================

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ============================
// Typing Animation
// ============================

const words = [
    "Cloud Computing Enthusiast",
    "AWS Cloud Learner"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeWord() {

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(deleteWord, 1500);

    }

}

function deleteWord() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteWord, 50);

    } else {

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(typeWord, 300);

    }

}

typeWord();