let screenPrice  = 1000
let percentage = 10
let allServicePrices;
let NewtitleProject = '';
let titleProject;
let screensValue;
let responsive;



const asking = function (){
titleProject = prompt('Название проекта?')
screensValue = prompt ('Типы экранов: шаблонные, с уникальным дизайном, с анимациями')
responsive = prompt ('нужен ли респонсивный сайт?(да/нет)')
  if (responsive === "да") {
  console.log("нужен");
  }
  else  {
  console.log("не нужен");
  }
}
asking ();

 
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')

let fullPrice = servicePrice1 + servicePrice2 + screenPrice
console.log(fullPrice);

let percentageResult = +(getFullPrice*(percentage/100))
console.log (percentageResult, 'Процент подрядчику')

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма за вычетом процента подрядчику')

//lesson2.4

function getAllServicePrices  () {
   return  +servicePrice1 + +servicePrice2;
}

function getFullPrice () {
    return  servicePrice1 + servicePrice2 + screenPrice;
}

function getTitle (){
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}


function getServicePercentPrices () {
    return fullPrice -  (fullPrice *(percentage / 100));
}




allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePrice = getServicePercentPrices ();
NewtitleProject = getTitle ();



console.log(titleProject)
console.log(screensValue)
console.log(service1)
console.log(servicePrice1)
console.log(service2)
console.log(servicePrice2)
console.log (allServicePrices,'стоимость всех дополнительных услуг')
console.log(fullPrice,'стоимость всех дополнительных услуг и стоимость верстки')
console.log(Math.round(servicePrice), 'моя сумма после вычета процента подрядчику')
console.log (NewtitleProject)


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

