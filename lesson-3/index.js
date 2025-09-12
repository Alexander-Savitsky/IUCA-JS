// Массивы (индексы, длинна, добавление)
// Цикл: for / for of / for со счётчиком
// Оператор ++
// Управляющие операторы циклов break / continue
// Разница между "==" и "==="
// Принцип DRY

// Массивы

var names = ['Sasha', 'Erica', 'Nonna', 'Masha'];

// Индексы
console.log(names[0]);
console.log(names[2]);

// Длинна (lenght)
console.log(names.length + " - это кол-во имен в данном массиве");

// Добавление в конец с помощью push()
names.push('Linda');

// Добавление в начало с помощью unshift()
names.unshift("Sakura");

// Изменение
names[1] = 'Anna';
names

// Циклы 

// 1. for of
for (var i of names) {
    console.log("Name: " + i);
}

// for со счетчиком
for (var i = 0; i < names.length; i++) {
    console.log("Index [" + i + "]. Name: " + names[i]);
}

// Оператор ++
var num = 5;
console.log(++num);

// Управляющие операторы циклов break / continue
for (var i = 1; i < 10; i++) {
    if (i === 3) continue;
    if (i === 6) break;
    console.log(i);
}

// Разница между "==" и "==="
console.log("hello" == "hello");
console.log("1" == 1);
console.log("1" === 1);
console.log(1 === 1);

// Принцип DRY

// Плохо
function square_1(a) {
    return a * a
}

function square_2(b) {
    return b * b
}
