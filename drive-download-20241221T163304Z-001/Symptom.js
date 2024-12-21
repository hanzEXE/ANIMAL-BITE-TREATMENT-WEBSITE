const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {// Navigation links are visible when the hamburger menu is clicked

            navLinks.classList.toggle("active");
    });