let userInput = prompt("Введите число:");

let convertedString = String(userInput);

if (isNaN(userInput)) {
    console.log("Не число");
} else {
    console.log("Строка: " + convertedString);
}
