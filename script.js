document.addEventListener("DOMContentLoaded", () => {
    // Function to animate text in the Home section
    function animateHomeText() {
      const homeText = document.querySelector(".home h1");
      const textContent = homeText.textContent;
      let index = 0;
  
      function showHomeText() {
        homeText.textContent = textContent.slice(0, index);
        index++;
        if (index <= textContent.length) {
          setTimeout(showHomeText, 100); // Adjust the delay (in milliseconds) as needed
        }
      }
  
      showHomeText();
    }
  
    // Check if the lastVisitedSection exists in sessionStorage
    const lastVisitedSection = sessionStorage.getItem("lastVisitedSection");
    if (lastVisitedSection) {
      // Scroll to the last visited section if it exists in sessionStorage
      const sectionToScroll = document.querySelector(lastVisitedSection);
      if (sectionToScroll) {
        sectionToScroll.scrollIntoView();
      }
    }
  
    // Save the ID of the current section to sessionStorage on click
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.hasAttribute("href")) {
        const href = target.getAttribute("href");
        if (href.startsWith("#")) {
          sessionStorage.setItem("lastVisitedSection", href);
        }
      }
    });
  
    // Animate the text in the Home section
    animateHomeText();
  });
  