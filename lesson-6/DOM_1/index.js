// DOM - document object model

// Получаем элемент
const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const btn = document.getElementById('btn');
const status = document.getElementById('status');

// Обработчик событий при вводе имени
nameInput.addEventListener('input', function () {
    if (nameInput.value.trim() !== '') {
        greeting.textContent = `Привет, ${nameInput.value}!`;
        greeting.style.color = '#fff';
        greeting.style.textShadow = '0 2px 10px rgba(255,255,255,0.5)';
    } else {
        greeting.textContent = '';
    }
})

// Обработчик события на кнопку
btn.addEventListener('click', function () {
    status.textContent = "Вы купили билет";
    status.style.color = '#2ecc71';
    status.style.background = 'rgba(46, 204, 113, 0.1)';

    // Добавляем небольшую анимацию
    status.style.transform = 'scale(1.05)';
    setTimeout(() => {
        status.style.transform = 'scale(1)';
    }, 300);
})

// Обработчик события на кнопку
btn.addEventListener("mouseover", function () {
    status.textContent = "Вы хотите купить билет?";
    // Добавляем небольшую анимацию
    status.style.transform = 'scale(1.05)';
    setTimeout(() => {
        status.style.transform = 'scale(1)';
    }, 300);
})