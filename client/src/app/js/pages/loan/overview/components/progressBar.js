const progressBar = document.querySelector('.progress-bar');
const progressFill = progressBar.querySelector('.progress-fill');

const max = progressBar.getAttribute('data-max');
const current = progressBar.getAttribute('data-current');

const percentage = (current / max) * 100;
progressFill.style.width = percentage + '%';
