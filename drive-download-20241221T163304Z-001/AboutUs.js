var hamburger = document.getElementById("hamburger");
        var navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
    });

// Select all the cards and their respective title and overview elements
var cards = document.querySelectorAll('.card1, .card2, .card3');

// Function to handle mouseenter event for all cards
function handleMouseEnter(card) {
  // Change the background color of the card
  card.style.backgroundColor = '#E7D2CC';  // Set background color for the card
  
  // Change the border color of the card
  card.style.borderColor = '#B9B7BD';  // Set border color for the card
  
  // Select the card's title and overview based on the card hovered
  var cardTitle = card.querySelector('.card-title');
  var cardOverview = card.querySelector('.card-overview');
  
  // Change the background color of the card's title and overview
  if (cardTitle) {
    cardTitle.style.backgroundColor = '#B9B7BD';  // Set background color for the card title
  }
  if (cardOverview) {
    cardOverview.style.backgroundColor = '#B9B7BD';  // Set background color for card overview
  }
}

// Function to handle mouseleave event for all cards
function handleMouseLeave(card) {
  // Reset the background color of the card
  card.style.backgroundColor = '#B9B7BD';  // Reset background color for the card
  
  // Reset the border color of the card
  card.style.borderColor = '#E7D2CC';  // Reset border color for the card
  
  // Select the card's title and overview based on the card hovered
  var cardTitle = card.querySelector('.card-title');
  var cardOverview = card.querySelector('.card-overview');
  
  // Reset the background color of the card's title and overview
  if (cardTitle) {
    cardTitle.style.backgroundColor = '#E7D2CC';  // Reset background color for the card title
  }
  if (cardOverview) {
    cardOverview.style.backgroundColor = '#E7D2CC';  // Reset background color for card overview
  }
}

// Add event listeners for mouseenter and mouseleave on all cards
cards.forEach(card => {
  card.addEventListener('mouseenter', () => handleMouseEnter(card));  // On hover over card
  card.addEventListener('mouseleave', () => handleMouseLeave(card));  // On mouse leave from card
});
