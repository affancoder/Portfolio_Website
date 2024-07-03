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
  e.preventDefault();
});

