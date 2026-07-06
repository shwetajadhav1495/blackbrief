// Fade in sections when scrolling

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hero, .featured, article, footer").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});