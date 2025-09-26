// Список цен
const prices = {
    coffee: 100,
    tea: 15,
    burger: 200,
    pizza: 350
};

// Переменные
const nameInput = document.getElementById('name');
const dichSelect = document.getElementById('dich');
const countInput = document.getElementById('count');
const orderBtn = document.getElementById('orderBtn');
const statuse = document.getElementById('statuse');
const total = document.getElementById('total');

let totalPrice = 0;

// Обработчик событий
orderBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const selectedDish = dichSelect.value;
    const countValue = parseInt(countInput.value);

    if (!name || !countValue || countValue < 1) {
        statuse.textContent = "Заполните все поля корректно";
        statuse.style.color = "red";
        return;
    }

    const sum = prices[selectedDish] * countValue;
    totalPrice += sum;

    let dishName = '';

    switch (selectedDish) {
        case 'coffee':
            dishName = 'Кофе';
            break;
        case 'tea':
            dishName = 'Чай';
            break;
        case 'burger':
            dishName = 'Бургер';
            break;
        case 'pizza':
            dishName = 'Пицца';
            break;
        default:
            dishName = 'Неизвестное блюдо';
            break;
    }

    statuse.textContent = `${name}, вы заказали ${countValue} ${dishName} на сумму ${sum} рублей.`;
    statuse.style.color = "lightgreen";
    total.textContent = `Общая сумма заказа: ${totalPrice} рублей.`;

    nameInput.value = '';
    dichSelect.selectedIndex = 0;
    countInput.value = '';
});