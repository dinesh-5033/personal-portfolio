
/* ================= LOADER ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
});

/* ================= TYPING EFFECT ================= */
const texts = [
  "Full Stack Developer",
  "Problem Solver"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  currentText = texts[i];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, j--);
  } else {
    typingElement.textContent = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();

/* ================= BACK TO TOP BUTTON ================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ================= MOBILE MENU ================= */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ================= LOAD PROJECTS ================= */
const API_URL = "https://personal-backend-bv8x.onrender.com/api/projects";

async function loadProjects() {
  try {
    const res = await fetch(API_URL);
    const projects = await res.json();

    const container = document.getElementById("project-list");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach(project => {
      container.innerHTML += `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Tech:</strong> ${project.technology}</p>
          <a href="${project.github}" target="_blank">GitHub</a>
        </div>
      `;
    });

  } catch (err) {
    console.log("Error loading projects:", err);
  }
}

loadProjects();

/* ================= CONTACT FORM ================= */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const res = await fetch("https://personal-backend-bv8x.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      alert("✅ " + data.message);

      form.reset();

    } catch (err) {
      alert("❌ Something went wrong. Try again later.");
    }
  });
}