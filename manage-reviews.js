document.addEventListener('DOMContentLoaded', function () {
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function () {
           
            const reviewItem = button.closest('.review-item');
            reviewItem.style.backgroundColor = '#C8E6C9'; // Exemple de changement de couleur
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function () {
           
            const reviewItem = button.closest('.review-item');
            reviewItem.style.backgroundColor = '#FFCDD2'; // Exemple de changement de couleur
        });
    });
});