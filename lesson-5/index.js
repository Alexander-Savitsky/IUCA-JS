// Структурное программирование
// Анонимные функции, стрелочное функции
// Замыкание
// Callbacks

// 1) Структурное программирование
const MENU = {
    espresso: 2.5,
    latte: 3.5,
    tea: 1.8,
    croissant: 2.0
};

// Валидация заказа
function validateOrder(orderItem) {
    const errors = []
    const valid = []

    for (const name of orderItem) {
        if (MENU[name]) valid.push(name);
        else errors.push(`Нет в меню: ${name}`);
    }

    return { valid, errors }
};

// Подсчет суммы
function calculateTotal(validItems) {
    return validItems.reduce((total, name) => total + MENU[name], 0);
};

// Применение дисконта
function applyDiscount(total, isLoyalCustomer) {
    if (!isLoyalCustomer) return total;
    return +(total * 0.9).toFixed(2);
}

// Формирование чека
function formatReceipt(items, total) {
    const lines = items.map(i => `${i} - $${MENU[i].toFixed(2)}`);
    lines.push("---------------------");
    lines.push(`Итого: $${total.toFixed(2)}`);
    return lines.join("\n");
}

// Главная функция
function processOrder(orderItem, isLoyalCustomer = false) {
    const { valid, errors } = validateOrder(orderItem);

    if (errors.length) {
        console.warn("Ошибка в заказе:", errors);
    }

    const sum = calculateTotal(valid);
    const total = applyDiscount(sum, isLoyalCustomer);
    const receipt = formatReceipt(valid, total);

    console.log(receipt);

    return { receipt, total, errors };
}

// Пример использования
const order = ['latte', 'tea', 'croissant', 'americano'];
const result = processOrder(order, true);
console.log(result);

// 2) Анонимные функции, стрелочное функции
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map(number => number * number);
console.log(squares);

setTimeout(function () {
    console.log('Hello, world!');
}, 2000);

setTimeout(() => console.log('Hello, everyone'), 5000);


// 3) Замыкание
function createCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// 4) Callback
function greeting(name, callback) {
    console.log(`Привет ${name}`);
    callback();
}

function afterGreeting() {
    console.log("Как дела?");
}

greeting("Дин", afterGreeting);

// Анонимный callback
greeting("Сэм", function () {
    console.log("Рад тебя видеть!");
})