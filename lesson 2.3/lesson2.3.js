
let screenPrice  = 100;
let partnerPercent = 33;


let titleProject = prompt('Название проекта?')
console.log(titleProject)
let screensValue = prompt ('Типы экранов')
console.log(screensValue)

let responsive = prompt ('нужен ли респонсивный сайт?(да/нет)')
  if (responsive === "да") {
  console.log("нужен");
  }

  else  {
  console.log("не нужен");
  }
 
let service1 = prompt('Какой сервис нужен?')
console.log(service1)
let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)
let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2)
let  servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2)


let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;
console.log(fullPrice)

servicePercentPrice = Math.round(
  fullPrice - (fullPrice * partnerPercent) / 100
);

console.log(servicePercentPrice);

if (fullPrice > 50000) {
  console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
} else {
  // сюда попадут случаи: fullPrice === 0, 20000, 50000
  console.log("Граничное значение цены");
}


