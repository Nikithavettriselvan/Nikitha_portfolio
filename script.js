document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const aboutContent = document.querySelector(".about-content");
    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function startCounter() {

        if (counterStarted) return;
        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.dataset.target);
            let count = 0;
            const increment = Math.ceil(target / 80);

            function updateCounter() {

                if (count < target) {

                    count += increment;

                    if (count > target) count = target;

                    counter.textContent = count + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            }

            updateCounter();

        });

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                aboutContent.classList.add("show");
                startCounter();

            }

        });

    }, { threshold: 0.4 });

    observer.observe(aboutContent);

});

// ==========================
// Achievement Gallery
// ==========================

// Academic Images
const academicImages = [
    "images/award3.png",
    "images/award2.png",
    "images/award1.jpeg"
];

// Leadership Images
const leadershipImages = [
    "images/lead1.png",
    "images/lead2.png",
    "images/lead3.png"
];

// Patent Images
const patentImages = [
    "images/patent1.png",
    "images/patent2.png"
];

// Certificate Images
const certificateImages = [
    "images/cert1.png",
    "images/cert2.png",
];

let currentImages = [];
let currentIndex = 0;

// Open Gallery
function openGallery(type) {

    if (type === "academic") {
        currentImages = academicImages;
    }

    else if (type === "leadership") {
        currentImages = leadershipImages;
    }

    else if (type === "patent") {
        currentImages = patentImages;
    }

    else if (type === "certificate") {
        currentImages = certificateImages;
    }

    currentIndex = 0;

    document.getElementById("slideImage").src =
        currentImages[currentIndex];

    document.getElementById("galleryModal").style.display = "flex";
}

// Close Gallery
function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

// Next / Previous Image
function changeSlide(step) {

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    document.getElementById("slideImage").src =
        currentImages[currentIndex];
}

// Close when clicking outside
window.addEventListener("click", function (e) {

    const modal = document.getElementById("galleryModal");

    if (e.target === modal) {
        closeGallery();
    }

});

// Keyboard Navigation
document.addEventListener("keydown", function (e) {

    const modal = document.getElementById("galleryModal");

    if (modal.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        changeSlide(1);
    }

    if (e.key === "ArrowLeft") {
        changeSlide(-1);
    }

    if (e.key === "Escape") {
        closeGallery();
    }

});

document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("7vhp3E3-ze53Qf7YQ");

  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("statusMessage");

  
  function showMessage(text, type) {
    statusMessage.textContent = text;
    statusMessage.className = type + " show";

    setTimeout(() => {
      statusMessage.classList.remove("show");
    }, 3000);
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_y2egnhb",
      "template_p20yv7u",
      this
    )
    .then(() => {
      showMessage("Message sent successfully!", "success");
      contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);

        if (error) {
            console.log("Status:", error.status);
            console.log("Text:", error.text);
    }

    alert(JSON.stringify(error));

    showMessage("Failed to send message", "error");
    });
  });

});
//preloader
document.body.style.overflow = "hidden";

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("preloader").classList.add("hide");

        document.body.style.overflow = "auto";

    }, 2800);

});
//to mute the sound
const video = document.querySelector("video");
video.muted = true;