document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const screens = document.querySelectorAll(".screen");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetScreen = document.getElementById(targetId);

        // Hide all screens
        screens.forEach(screen => screen.classList.remove("active"));

        // Show clicked screen
        if (targetScreen) {
          targetScreen.classList.add("active");
        }

        // Highlight active nav link
        navLinks.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});

// Button on About-Me page to go to Projects
const projectsButton = document.getElementById("projects-btn");
if (projectsButton) {
    projectsButton.addEventListener("click", () => {
        const targetId = "Projects";
        const targetScreen = document.getElementById(targetId);

        // Hide all screens
        document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));

        // Show Projects screen
        if (targetScreen) targetScreen.classList.add("active");

        // Highlight the Projects nav link
        document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active-link"));
        const projectsLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
        if (projectsLink) projectsLink.classList.add("active-link");
    });
}

//Contact Page

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const screens = document.querySelectorAll(".screen");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetScreen = document.getElementById(targetId);

        screens.forEach(screen => screen.classList.remove("active"));
        if (targetScreen) targetScreen.classList.add("active");

        navLinks.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");

        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  const projectsButton = document.getElementById("projects-btn");
  if (projectsButton) {
      projectsButton.addEventListener("click", () => {
          const targetId = "Projects";
          const targetScreen = document.getElementById(targetId);

          document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
          if (targetScreen) targetScreen.classList.add("active");

          document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active-link"));
          const projectsLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
          if (projectsLink) projectsLink.classList.add("active-link");
      });
  }

  // Contact Page
  document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(el => el.style.display = 'none');

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      let isValid = true;

      if (name === '') {
          document.getElementById('nameError').textContent = 'Name is required';
          document.getElementById('nameError').style.display = 'block';
          isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '' || !emailPattern.test(email)) {
          document.getElementById('emailError').textContent = 'Valid email is required';
          document.getElementById('emailError').style.display = 'block';
          isValid = false;
      }

      const phonePattern = /^[0-9]{10}$/;
      if (phone === '' || !phonePattern.test(phone)) {
          document.getElementById('phoneError').textContent = 'Valid phone number is required';
          document.getElementById('phoneError').style.display = 'block';
          isValid = false;
      }

      if (message === '') {
          document.getElementById('messageError').textContent = 'Message is required';
          document.getElementById('messageError').style.display = 'block';
          isValid = false;
      }

      if (isValid) {
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
      }
  });
});
