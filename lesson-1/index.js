// var enterUserName = prompt("What is your name?");
// Вывод данных через HTML страницу
// document.writeln(enterUserName);

// Вывод через консоль
// console.log(enterUserName);

// Вывод через сплывающее окно
// alert(enterUserName);

//document.body.style.backgroundColor = "rgba(51, 13, 58, 1)";
// alert("Нажми на кнопку!")

// 1) String - всё что в ковычках
var customerName = "Sasha";
var customerSurame = "Savitsky";

// 2) Number - числовой тип данных
var number = 12345;

// 3) Boolean - true or false
var alive = false;

// 4) Underfined - неизвестный тип данных
var custumerBirthDate;

// 5) Null - ноль
var custumerBirthDateTwo = null;

// 6) Objects - Объекты
var customerPassport = {
  Series: "Id",
  Number: "123456789",
  INN: "1235795135",
  IssueDate: "02-08-2025",
  ExpiryDate: "02-08-2034",
  Address: "Tokmok",
};

console.log("Series: " + customerPassport.Series);
console.log("Number: " + customerPassport.Number);
console.log("INN: " + customerPassport.INN);
console.log("IssueDate: " + customerPassport.IssueDate);
console.log("ExpiryDate: " + customerPassport.ExpiryDate);
console.log("Address: " + customerPassport.Address);