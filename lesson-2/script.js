//============================================
// Преобразование введенного значения в число
//============================================
// var num1 = Number(prompt("Enter some number"));
// console.log(typeof num1); // Выводит тип данных переменной num1

//============================================================
// Условная конструкция if-else для проверки количества денег
//============================================================
// var money = 500;
// if (money >= 100) {
//     console.log("Круто! Иди покушай");
// } else if (money < 100 && money >= 25) {
//     console.log("Ты можешь позволить себе пирожок");
// } else {
//     console.log("Сегодня ты голодный");
// }

//===============================================================================
// Альтернативная реализация через switch (используется хитрость с switch(true))
//===============================================================================
// var money = Number(prompt("Сколько у тебя с собой денег?"));
// 
// switch (true) {
//     case (money >= 100):
//         document.writeln("Круто! Иди покушай");
//         break;
//     case (money >= 25):
//         document.writeln("Ты можешь позволить себе пирожок");
//         break;
//     default:
//         document.writeln("Сегодня ты голодный");
// }

//=============================================
// Конвертация валюты с использованием if-else
//=============================================
// if (currency === "AU") {
//     convertedAmount = amount / 5000;
//     console.log(convertedAmount);
// }
// else if (currency === "AG") {
//     convertedAmount = amount / 2500;
//     console.log(convertedAmount);
// }
// else if (currency === "PL") {
//     convertedAmount = amount / 7500;
//     console.log(convertedAmount);
// }
// else {
//     console.warn("We converted only (AU, AG and PL)");
// }

//============================================
// Конвертация валюты с использованием switch
//============================================
// var amount = Number(prompt("Enter amount"));
// var currency = prompt("Enter curremcy").toUpperCase(); // Приводим введенную валюту к верхнему регистру
// 
// var convertedAmount = 0;
// 
// switch (currency) {
//     case "AU":
//         convertedAmount = amount / 5000;
//         console.log(convertedAmount);
//         break;
// 
//     case "AG":
//         convertedAmount = amount / 2500;
//         console.log(convertedAmount);
//         break;
// 
//     case "PL":
//         convertedAmount = amount / 7500;
//         console.log(convertedAmount);
//         break;
// 
//     default:
//         console.warn("We converted only (AU, AG and PL)")
// }

//=============================================================
// Конвертация арабских цифр в римские с использованием switch
//=============================================================
//var arabicNumber = Number(prompt("Enter number [1-9]"));
var arabicNumber = 5;

switch (arabicNumber) {
    case 1:
        console.log(arabicNumber + " = I");
        break;
    case 2:
        console.log(arabicNumber + " = II");
        break;
    case 3:
        console.log(arabicNumber + " = III");
        break;
    case 4:
        console.log(arabicNumber + " = IV");
        break;
    case 5:
        console.log(arabicNumber + " = V");
        break;
    case 6:
        console.log(arabicNumber + " = VI");
        break;
    case 7:
        console.log(arabicNumber + " = VII");
        break;
    case 8:
        console.log(arabicNumber + " = VIII");
        break;
    case 9:
        console.log(arabicNumber + " = IX");
        break;

    default:
        console.error("Enter number [1-9]"); // Выводим ошибку, если число не в диапазоне 1-9
}