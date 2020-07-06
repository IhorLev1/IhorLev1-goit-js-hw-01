"use strick";

let input;
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  const currentNumber = Number(input);
  if (Number.isNaN(currentNumber)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += currentNumber;
  }
}
alert(`Общая сумма чисел равна ${total}`);
