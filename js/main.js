const submit = document.getElementById('submit');
const mainBlock = document.getElementById('main-block');
const thanksBlock = document.getElementById('thanks-block');
const ratingBtn = document.querySelectorAll('.mark-rating');
const selectedRating = document.getElementById('selected-rating');

ratingBtn.forEach((button) => {
    button.addEventListener('click', () => {
        selectedRating.textContent = button.textContent;
    });
});

submit.addEventListener('click', function() {
    if (selectedRating.textContent === '') {
        alert('Please select a rating');
        return
    }
    mainBlock.classList.add('hidden');
    thanksBlock.classList.remove('hidden');
})