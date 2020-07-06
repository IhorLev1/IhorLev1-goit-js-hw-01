"use stick";

const message = prompt("Укажите куда доставлять?");

let country = "";
let price = 0;

switch (message.toUpperCase()) {
  case "КИТАЙ":
    country = "Китай";
    price = 100;
    break;
  case "ЧИЛИ":
    country = "Чили";
    price = 250;
    break;
  case "АВСТРАЛИЯ":
    country = "Австралия";
    price = 170;
    break;
  case "ИНДИЯ":
    country = "Индия";
    price = 80;
    break;
  case "ЯМАЙКА":
    country = "Ямайка";
    price = 120;
    break;
  default:
    price = 0;
    break;
}
if (price === 0) {
  alert("В вашей стране доставка не доступна");
} else {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}
