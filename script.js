
const gameCards = document.querySelectorAll('.game-card');


gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const gameTitle = card.querySelector('h3').textContent;
        const gameDescription = card.querySelector('p').textContent;
        alert(`Game: ${gameTitle}\nDescription: ${gameDescription}`);
    });
});