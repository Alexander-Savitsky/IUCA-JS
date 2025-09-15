// Написать функцию которая маскирует номер банковской карты. 
// Например: maskCard("4815154823541789") -> "481515XXXXXX1789". 
// Должны быть видны первые 6 и последние 4 символа, 
// остальные скрыть символом(по умолчанию Х). 
// Причем сделать так чтобы скрывающий символ можно было передавать как параметр. 
// Например: maskCard("4815154823541789", "*") -> "481515******1789".

function maskCard(cardNumber, hiddenSymbol = "X") {
    let cardStr = String(cardNumber);
    if (cardStr.length <= 10) {
        return cardStr;
    }

    let firstSix = cardStr.slice(0, 6);
    let lastFour = cardStr.slice(-4);
    let maskedPart = hiddenSymbol.repeat(cardStr.length - 10);

    return firstSix + maskedPart + lastFour;
}

console.log(maskCard("4815154823541789"));
console.log(maskCard("4815154823541789", "*"));