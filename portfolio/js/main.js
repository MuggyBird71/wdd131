// Initialize particles.js
document.addEventListener("DOMContentLoaded", () => {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#000000" },
        shape: {
          type: "circle",
          stroke: { width: 1, color: "#000000" },
          polygon: { nb_sides: 4 },
        },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 2 },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      retina_detect: true,
    });
  });
  
  // Dynamic Text Animation
  document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "Dylan Phillips",
      "a Software Engineer",
      "a Web Developer",
      "a Backend Developer",
      "a Frontend Developer",
      "a Full Stack Developer",
    ];
  
    const dynamicText = document.getElementById("dynamic-text");
    let currentIndex = 0;
  
    function updateDynamicText() {
      const newSpan = document.createElement("span");
      newSpan.textContent = phrases[currentIndex];
      dynamicText.innerHTML = "";
      dynamicText.appendChild(newSpan);
  
      setTimeout(() => {
        dynamicText.classList.add("flipping");
        setTimeout(() => {
          dynamicText.classList.remove("flipping");
          newSpan.classList.add("hidden");
        }, 500);
      }, 100);
  
      currentIndex = (currentIndex + 1) % phrases.length;
    }
  
    setInterval(updateDynamicText, 3000);
    updateDynamicText();
  });
  
  // Tooltips for Icons
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".icons-grid i").forEach((icon) => {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = icon.getAttribute("data-tooltip");
      icon.appendChild(tooltip);
  
      icon.addEventListener("mouseenter", () => {
        icon.classList.add("show-tooltip");
      });
  
      icon.addEventListener("mouseleave", () => {
        icon.classList.remove("show-tooltip");
      });
    });
  });
  