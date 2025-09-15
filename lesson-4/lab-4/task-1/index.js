// Написать функцию которая генерирует массив из чисел в
// определенном диапазоне с определенным шагом (по умолчанию 1).
// Например:
// getRange(1, 10) -> [1,2,3,4,5,6,7,8,9,10];
// getRange(10, 30, 5) -> [10,15,20,25,30].

function getRange(a, b, c = 1) {
    let arrayWithNums = [];
    while (a <= b) {
        arrayWithNums.push(a);
        a += c;
    }

    return arrayWithNums;
}

console.log(getRange(1, 10));
console.log(getRange(10, 30, 5));
