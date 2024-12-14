document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
  function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    var toggleButton = document.getElementsByClassName(".navbar-menu");

    if (x.className === "navbar") {
      x.className += " responsive";
      toggleButton.innerHTML = "&#10006; Close"; // Change to close icon
    } else {
      x.className = "navbar";
      toggleButton.innerHTML = "&#9776; Menu"; // Change back to menu icon
    }
  }
});

// ---- Preloader ----

const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// -----------Right click disable code ---------

document.addEventListener("contextmenu", function (e) {
  // e.preventDefault();
});

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('loaded');
});

// Gsap Animation 

window.addEventListener('load', () => {
  // Animate the navbar
  // gsap.from("nav", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });

  // Animate the song list containers
  gsap.from(".container", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2, // Stagger animation for multiple containers
  });

  // Animate individual song items
  gsap.from(".songItem", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1, // Stagger animation for song items
    delay: 0.5,
  });

  // Animate the bottom player controls
  gsap.from(".bottom", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 1 });
});

gsap.to('.footer-container', {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: 'power3.out',
  delay: 0.3
});

gsap.to('.footer-bottom', {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: 'power3.out',
  delay: 0.5
});