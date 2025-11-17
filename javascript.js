// Atualiza o ano no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Rolagem suave corrigindo o offset da navbar
const links = document.querySelectorAll(".nav-link[href^='#']");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// Navbar com efeito ao rolar a página
const navbar = document.getElementById("mainNavbar");
function handleNavbarScroll() {
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}
window.addEventListener("scroll", handleNavbarScroll);
handleNavbarScroll(); // chama uma vez ao carregar

// Animação de entrada dos elementos com a classe "reveal"
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));

// Inicializar tooltips do Bootstrap (usado nas parcerias)
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
