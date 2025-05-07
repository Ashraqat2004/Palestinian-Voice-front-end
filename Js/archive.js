// Select all card elements
const cards = document.querySelectorAll('.card');

// Add event listeners for mouse enter and leave
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Scale up the card
        card.style.transition = 'transform 0.3s ease'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Scale back to original size
    });
});