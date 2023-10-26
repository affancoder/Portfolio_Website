document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
});
