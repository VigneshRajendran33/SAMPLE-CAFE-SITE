// Wait for DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Sticky Navbar on Scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Change menu icon bars to close icon
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close nav when links are clicked on mobile
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.querySelector("i").className = "fas fa-bars";
    });
  });

  // 3. Dark / Light Mode Toggle
  const themeBtn = document.getElementById("theme-btn");
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const icon = themeBtn.querySelector("i");
    
    if (currentTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
      icon.className = "fas fa-moon";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      icon.className = "fas fa-sun";
    }
  });

  // 4. Interactive Menu Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from other buttons
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      menuItems.forEach(item => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
          // Quick fade-in animation trigger
          item.style.opacity = "0";
          setTimeout(() => item.style.opacity = "1", 50);
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 5. Booking Form Submission handling
  const bookingForm = document.getElementById("booking-form");
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your luxury table reservation request at Brew Haven has been made successfully.");
    bookingForm.reset();
  });
});