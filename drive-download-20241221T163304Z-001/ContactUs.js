const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
    });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const messageInput = document.querySelector(".message");

    // Helper function to show error
    const showError = (input, message) => {
        input.style.borderColor = "red"; // Highlight the input with a red border
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.classList.add("error-message");
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.style.marginTop = "5px";
            input.insertAdjacentElement("afterend", error);
        }
        error.textContent = message;
    };

    // Helper function to clear error
    const clearError = (input) => {
        input.style.borderColor = ""; // Reset border color
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission by default

        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Please enter your name.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Please enter your message.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (!isValid) {
            return; // Stop submission if there are errors
        }

        // Clear all errors after successful validation
        [nameInput, emailInput, messageInput].forEach(clearError);

        // Display the thank-you message
        const thankYouMessage = document.createElement("div");
        thankYouMessage.setAttribute("role", "alert"); // Accessibility
        thankYouMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #EEEDE7;
            padding: 30px;
            border-radius: 10px;
            border-color: #E7D2CC;
            border-width: 5px;
            border-style: solid;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            z-index: 1000; /* Ensure it's on top */
            text-align: center;
        `;

        thankYouMessage.innerHTML = `
            <img src="img/new logo.png" alt="SANDLOGO" style="width: 150px; height: auto;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">THANK YOU FOR YOUR RESPONSE!</p>
            <p style="margin: 10px 0 0; font-size: 16px;">Please wait for our response, we will make sure to reply as soon as possible.</p>
            <p style="margin: 10px 0 0; font-size: 14px;">HAVE A GREAT DAY!</p>
        `;

        document.body.appendChild(thankYouMessage);

        // Remove the message after a few seconds
        setTimeout(() => {
            document.body.removeChild(thankYouMessage);
        }, 3500); // 3500 milliseconds =3.5 seconds

        
    });

    // Clear error when user starts typing
    nameInput.addEventListener("input", () => clearError(nameInput));
    emailInput.addEventListener("input", () => clearError(emailInput));
    messageInput.addEventListener("input", () => clearError(messageInput));
});
