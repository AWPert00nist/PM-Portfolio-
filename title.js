// Define the titles to loop through
const titles = ["Product Manager", "Frontend Developer", "Data Analyst"];
let currentTitleIndex = 0;

function updateTitle() {
  const titleElement = document.getElementById("title");
  titleElement.textContent = titles[currentTitleIndex];

  // Update the currentTitleIndex to loop through the titles
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;

  // Add the neon glow effect to the subtitle
  titleElement.classList.add("neon");

  // Add the visible class after a short delay for better animation
  setTimeout(() => {
    titleElement.classList.add("visible");
  }, 300); // Wait for 300ms to ensure the h1 animation is complete
}

// Call the updateTitle function every 3 seconds to rotate through the titles
setInterval(updateTitle, 3000);

// Run the updateTitle function immediately to display the first title
updateTitle();

// Hide the subtitle before the animation is complete
const headerText = document.getElementById("headerText");
const subtitle = document.getElementById("title");
headerText.addEventListener("animationiteration", () => {
  subtitle.style.display = "block";
});
