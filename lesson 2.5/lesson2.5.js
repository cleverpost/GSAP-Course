let screenPrice  = 1000
let percentage = 10
let allServicePrices;
let NewtitleProject = '';
let titleProject;
let screensValue;
let responsive;
let service1;
let service2



const checkIsNumber = function(x){
  return !isNaN(parseFloat(x)) && isFinite(x)
}


const asking = function (){
titleProject = prompt('Название проекта?')
screensValue = prompt ('Типы экранов: шаблонные, с уникальным дизайном, с анимациями')
responsive = prompt ('нужен ли респонсивный сайт?(да/нет)')
}
asking ()

 
//let service1 = prompt('Какой сервис нужен?')
//let servicePrice1 = +prompt('Сколько это будет стоить?')
//let service2 = prompt('Какой еще сервис тебе нужен?')
//let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')

const getAllServicePrices = function(){
  let sum = 0

  for (i = 0; i < 2; i++){

    if (i === 0){
      service1 = prompt ('Какой дополнительный тип услуги нужен?', 'Услуга 1')
    } else if (i === 1) {
      service2 = prompt ('Какой дополнительный тип услуги нужен?', 'Услуга 2')
    }
    let textFromPromt = '';

    while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null){
      textFromPromt = prompt ('Сколько это будет стоить?')
    }
    sum = sum + Number(textFromPromt)
  }
  return sum
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

// function checkIsNumber(value) {
  //return !isNaN(value); } 
  
  // или c помощью parseFloat() — превращает ввод в число, если не получилось — вернёт NaN 
  // isFinite() — проверяет, что это реальное число 
  
 