let screenPrice  = 1000;
let partnerPercent = 10;


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
console.log(fullPrice, 'полная стоимость')

let servicePercentPrice = Math.round(
  (fullPrice * partnerPercent) / 100
);

console.log(servicePercentPrice, 'процент подрядчику');

if (fullPrice > 50000) {
  console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
} else {
  console.log("Граничное значение цены");
}


//lesson2.3

const getAllServicePrices = function () {
   return  +servicePrice1 + +servicePrice2;
}
const allServicePrices = getAllServicePrices();
console.log (allServicePrices,'стоимость всех дополнительных услуг');

getFullPrice ()
function getFullPrice () {
    return  +allServicePrices + +screenPrice;
}
fullPrice = getFullPrice();
console.log(fullPrice,'стоимость всех дополнительных услуг и стоимость верстки')

getTitle ()
function getTitle (){
    titleProject = titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
console.log (titleProject)


getServicePercentPrices ()
function getServicePercentPrices () {
    return fullPrice - servicePercentPrice;
}
const servicePrice = getServicePercentPrices ();
console.log(servicePrice, 'моя сумма после вычета процента')


getRollbackMessage ()
function getRollbackMessage () {
    if (fullPrice > 50000) {
  console.log('10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log('5%');
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
} else {
  console.log("Граничное значение цены");
}
}
const RollbackMessage = getRollbackMessage ();
console.log(RollbackMessage)