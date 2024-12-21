const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active"); // This is used to show or hide the navigation menu

    });


        document.getElementById("toggleButton").addEventListener("click", function() {
        // Redirect to the Preventions.html page when the LEARN MORE button is clicked
                window.location.href = "Preventions.html";
        });
    