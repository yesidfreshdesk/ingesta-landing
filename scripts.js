// Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Scroll Reveal para Elementos con data-reveal
const revealElements = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.3 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease-out";
  revealObserver.observe(el);
});

// Scroll Reveal para las Cards de Flujo
const flowCards = document.querySelectorAll(".flow-card");
const flowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        flowObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

flowCards.forEach((card) => {
  flowObserver.observe(card);
});

// Selección de Pricing Cards
const pricingCards = document.querySelectorAll(".pricing-card");
pricingCards.forEach((card) => {
  card.addEventListener("click", () => {
    pricingCards.forEach((c) => c.classList.remove("selected")); // Desmarca todas
    card.classList.add("selected"); // Marca la clicada
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Resaltar ítem activo en el Navbar
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("section");

function highlightNavItem() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop - 100 &&
      window.scrollY < sectionTop + sectionHeight - 100
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNavItem);
window.addEventListener("load", highlightNavItem);

// Acordeón
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  title.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    accordionItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Toggle del menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});
