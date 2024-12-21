// Select the hamburger menu and navigation links
var hamburger = document.getElementById("hamburger");
var navLinks = document.querySelector(".nav-links");

// Add event listener for the hamburger menu click event
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on the navLinks element to show/hide the navigation menu
    navLinks.classList.toggle("active");
});

// Wait until the DOM is fully loaded before executing the code inside
document.addEventListener('DOMContentLoaded', function() {
    // Select the form section and the submit and clear buttons
    var form = document.querySelector('.form-section');
    var submitButton = form.querySelector('button[type="submit"]');
    var clearButton = form.querySelector('button[type="reset"]');

    // Add event listener for the submit button click event
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Create a new 'thank you' message element
        var thankYouMessage = document.createElement('div');
        thankYouMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);  /* Centers the message */
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

        // Add the content to the thank you message
        thankYouMessage.innerHTML = `
            <img src="FLOGO.png" alt="SANDLOGO" style="width: 150px; height: 150px;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">THANK YOU FOR YOUR RESPONSE!</p>
            <p style="margin: 10px 0 0; font-size: 16px;">Please wait for our response, we will make sure to reply as soon as possible.</p>
            <p style="margin: 10px 0 0; font-size: 14px;">HAVE A GREAT DAY!</p>
        `;

        // Append the thank you message to the body of the page
        document.body.appendChild(thankYouMessage);

        // Remove the thank you message after 3.5 seconds (3500 milliseconds)
        setTimeout(function() {
            document.body.removeChild(thankYouMessage);
        }, 3500);
    });

    // Add event listener for the clear button click event
    clearButton.addEventListener('click', function() {
        // Clear the values of all input and textarea elements within the form
        form.querySelectorAll('input, textarea').forEach(element => {
            element.value = '';
        });
    });
});
