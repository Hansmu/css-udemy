const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');
const closeModalButton = document.querySelector('.modal__action--negative');

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.style.display = 'initial';
        backdrop.style.display = 'initial';
    });
}

closeModalButton.addEventListener('click', () => {
    modal.style.display = '';
    backdrop.style.display = '';
});