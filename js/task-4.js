"use strick";

const credits = 23580;
const pricePerDroide = 3000;
const message = prompt("Количество дроидов которые хотите купить?");
let totalPrice = message * pricePerDroide;

if (message === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${message} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}
