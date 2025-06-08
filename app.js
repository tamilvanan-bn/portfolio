const observer = new IntersectionObserver(
  (entries) => {
    entries?.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: "0px", // No margin around the viewport
  }
);

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement?.forEach((el) => observer.observe(el));

const date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
