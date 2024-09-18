// Obter elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');

// Abrir modal ao clicar no botão
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar modal ao clicar no 'X'
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

