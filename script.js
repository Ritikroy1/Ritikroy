document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".section, .quote-band, .personality");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

revealItems.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);
