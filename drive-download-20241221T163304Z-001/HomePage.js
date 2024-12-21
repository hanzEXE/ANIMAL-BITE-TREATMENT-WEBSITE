const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");
        // Toggle the active class to show or hide the navigation menu
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

document.addEventListener('scroll', () => { 
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
});

document.getElementById("toggleButton").addEventListener("click", function() {
    // Redirect to the more.html page when the MORE button is clicked
    window.location.href = "Preventions.html";
});

        
