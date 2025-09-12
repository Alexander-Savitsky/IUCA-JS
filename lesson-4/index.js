// 1) Циклы (повторение)
// 2) Бесконечный цикл и его последствия
// 3) Цикл while и do while
// 4) Задача на перевотор строки (самостоятельно)
// 5) Игра угадай число
// 6) Функции 2 способа написания declaration, expression, ключевое слово return
// 7) Тернарный оператор

// =============================================================================

// 1) Циклы (повторение)
for (let i = 1; i <= 10; i++) {
    console.log(`Число - ${i}`);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - четное`);
    } else {
        console.log(`${i} - нечетное`);
    }
}


var i = 1;
while (i <= 5) {
    console.log(`i - ${i}`);
    i++;
}

// Игра "угадай число"
let targetNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
let attempts = 0;

do {
    userGuess = Number(prompt("Введите вашу догадку (число от 1 до 100):"));
    attempts++;

    if (userGuess > targetNumber) {
        alert("Меньше!");
    } else if (userGuess < targetNumber) {
        alert("Больше!");
    } else {
        alert(`Поздравляем! Вы угадали число ${targetNumber} за ${attempts} попыток.`);
    }
} while (userGuess !== targetNumber);


// declaration
function square(a, b) {
    return a * b;
}
console.log(square(13, 12));

// expression
var square2 = function (x, y) {
    return x * y;
}
console.log(square2(25, 40));

// Тернарный оператор
var age = 18;
var ageStatus = (age >= 18) ? "YES" : "NO";
console.log(ageStatus);
