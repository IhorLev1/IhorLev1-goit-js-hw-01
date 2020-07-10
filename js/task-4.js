"use strick";

const credits = 23580;
const pricePerDroide = 3000;
const numOfDroids = prompt("Количество дроидов которые хотите купить?");
let totalPrice;

if (numOfDroids === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(numOfDroids))) {
  alert("Вы ввели не число!");
} else {
  totalPrice = Number(numOfDroids) * pricePerDroide;
  if (totalPrice > credits) {
    console.log("Недостаточно срадств на счету!");
  } else {
    console.log(
      `Вы купили ${numOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов`
    );
  }
}
