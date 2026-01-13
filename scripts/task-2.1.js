let userInput = prompt("Введите число:");

let convertedNumber = Number(userInput);

if (isNaN(userInput)) {
    console.log("Не число");
} else {
    console.log("Строка: " + convertedNumber);
}
