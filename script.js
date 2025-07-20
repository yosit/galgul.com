function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Set initial position above the viewport
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        
        // Set animation properties
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `confetti-fall ${duration}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, (duration + 0.5) * 1000);
    }
}

// Auto-create confetti on page load
window.addEventListener('load', () => {
    setTimeout(createConfetti, 500);
    
    // Create confetti every 10 seconds
    setInterval(createConfetti, 10000);
});

// Create confetti when clicking on Galgul's name
document.addEventListener('DOMContentLoaded', () => {
    const galgulName = document.querySelector('.galgul-name');
    const loveButton = document.querySelector('.love-button');
    
    if (galgulName) {
        galgulName.addEventListener('click', createConfetti);
    }
    
    if (loveButton) {
        loveButton.addEventListener('click', createConfetti);
    }
}); 