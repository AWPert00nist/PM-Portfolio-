document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll function
    function smoothScroll(target, duration) {
      const targetSection = document.querySelector(target);
      const targetPosition = targetSection.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const headerHeight = document.querySelector("header").offsetHeight;
      const distance = targetPosition - headerHeight;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  
    // Navigation click event listener
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        smoothScroll(target, 1000); // Adjust the duration as needed (in milliseconds)
      });
    });
  
    // Logo click event listener
    const logoLink = document.querySelector(".logo a");
    logoLink.addEventListener("click", e => {
      e.preventDefault();
      const target = logoLink.getAttribute("href");
      smoothScroll(target, 1000); // Adjust the duration as needed (in milliseconds)
    });
  
    // ... Rest of the code ...
  });
  