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


// Scrolling to top

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle Chatbot Visibility
function toggleChatbot() {
  const chatbot = document.querySelector('.chatbot-container');
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

// Predefined Responses (Detailed)
const responses = [
  { 
    keywords: ["who is affan", "what affan does", "about affan", "affan asghar", "md affan asghar"], 
    response: "MD Affan Asghar is a passionate Full Stack Web Developer and Computer Science Engineering student, dedicated to building beautiful, responsive, and user-friendly websites. 💻🚀" 
  },  
  { keywords: ["your name", "who are you", "creator", "made you", "built you","build"], response: "I'm a chatbot created by MD Affan Asghar. 😊" },
  { keywords: ["developer name", "who made you", "who is your developer"], response: "My developer is MD Affan Asghar. 🚀" },
  { keywords: ["phone number", "contact", "mobile", "phone"], response: "You can contact MD Affan Asghar at 📞 9339828230." },
  { keywords: ["email", "mail", "gmail"], response: "You can reach him at 📧 affanasgar8@gmail.com." },
  { keywords: ["address", "location", "where do you live"], response: "He lives at 🏠 Kankinara, Kolkata, West Bengal." },
  { keywords: ["skills", "expertise", "technologies", "tech stack"], response: "He is skilled in 🔥 Full-Stack Web Development, Node.js, React, Php, MySQL MongoDB, Express.js, JavaScript, HTML, CSS, and more!" },
  { keywords: ["projects", "work", "portfolio"], response: "His projects include 🎯 WanderLust-Holidays-Rental-Homes, Simtrak Solution, IVMS, and a Weather App using React. 🚀" },
  { keywords: ["portfolio", "website", "profile"], response: "Check out his portfolio here: 🌐 (Provide your portfolio link)." },
  { keywords: ["college", "education", "study", "degree"], response: "He is currently pursuing B.Tech in Computer Science Engineering (CSE) at 🏫 Narula Institute of Technology." },
  { keywords: ["internship", "experience", "job"], response: "He worked as a Web Developer Intern at 💼 Simtrak Solution Pvt Ltd." },
  { keywords: ["final year project", "academic project"], response: "His final year project is a full-stack web development project that aims to revolutionize the industry. 🚀" },
  { keywords: ["hobbies", "interests", "passion"], response: "He loves 💻 coding, designing beautiful websites, learning new tech, and contributing to open-source projects. 🚀" },
  { keywords: ["social media", "linkedin", "github"], response: "You can connect with him here:\n🔗 LinkedIn: https://linkedin.com/in/mdaffanasghar/\n🐱 GitHub: https://github.com/affancoder" },
  { keywords: ["career", "future plans", "goal"], response: "His goal is to become a highly skilled full-stack developer and work on innovative tech projects. 🚀" },
  { keywords: ["freelance", "hire", "services"], response: "Yes! He is available for freelance projects. Contact him at 📧 affanasgar8@gmail.com." },
  { keywords: ["hi", "hello", "hey"], response: "Hello! How can I assist you today? 😊" },
  { keywords: ["bye", "goodbye", "see you"], response: "Goodbye! Have a great day! 😊" },
];

// Function to Find Best Response (Smart Matching)
function findBestResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  let bestMatch = null;
  let highestMatchCount = 0;

  for (let entry of responses) {
      let matchCount = entry.keywords.filter(keyword => userMessage.includes(keyword)).length;
      
      if (matchCount > highestMatchCount) {
          highestMatchCount = matchCount;
          bestMatch = entry.response;
      }
  }

  return bestMatch || "I'm still learning! 😊 Ask me anything about MD Affan Asghar.";
}

// Send Message
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  // Add User Message
  addMessage(message, "user-message");

  // Get Bot Response
  setTimeout(() => {
      let botResponse = findBestResponse(message);
      addMessage(botResponse, "bot-message");
  }, 1000);

  userInput.value = "";
}

// Handle Enter Key
function handleKeyPress(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
}

// Add Message to Chat
function addMessage(text, className) {
  const messageContainer = document.getElementById("chatbotMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.textContent = text;
  messageContainer.appendChild(messageDiv);

  // Scroll to Bottom
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
