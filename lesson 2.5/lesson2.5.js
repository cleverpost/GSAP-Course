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
}
asking ()

 
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')



//lesson2.4

const getAllServicePrices = function () {
   return  servicePrice1 + servicePrice2
}

function getFullPrice () {
    return  screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice -  (fullPrice *(percentage / 100))
}

const getTitle = function (){
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}



allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices ();
NewtitleProject = getTitle ();



console.log(titleProject)
console.log(screensValue)
console.log(responsive);
console.log(service1)
console.log(servicePrice1)
console.log(service2)
console.log(servicePrice2)
console.log (allServicePrices,'стоимость всех дополнительных услуг')
console.log(fullPrice,'стоимость всех дополнительных услуг и стоимость верстки')
console.log(Math.ceil(servicePercentPrice), 'моя сумма после вычета процента подрядчику')
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


// lesson2.5 

// isNaN — спрашивает «это НЕ число?» 
// ! — переворачивает ответ 

function checkIsNumber(value) {
  return !isNaN(value); } 
  
  // или c помощью parseFloat() — превращает ввод в число, если не получилось — вернёт NaN 
  // // isFinite() — проверяет, что это реальное число 
  
  function checkIsNumber2(value) {
    return isFinite(parseFloat(value));
  } while (
    !checkIsNumber2(screenPrice) || // значение не число 
    screenPrice === null || // пользователь нажал Отмена 
    screenPrice.trim() === "" // пробелы 
    ){ 
      screenPrice = prompt ("Сколько будет стоить одна страница?"); 
    }
    
    screenPrice = +screenPrice;
    console.log(screenPrice); 
    getAllServicePrices = function (){
       let sum = 0;
       for (let i = 0; i < 2; i++)
        { let textFromPrompt;
          while ( 
            !checkIsNumber2(textFromPrompt) ||
            textFromPrompt === null ||
            textFromPrompt.trim() === "" ) 
            { 
              textFromPrompt = prompt("Сколько это будет стоить?");
             } 
             sum += +textFromPrompt; } 
             return sum; 
            }