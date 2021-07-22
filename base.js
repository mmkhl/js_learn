// Написать функцию, которая принимает два 
// числа и возращает результат их умножения

// let getvalue = function (first, second) {
//     return result = first * second;
// }
// console.log(getvalue(2, 4));

// Написать функцию, которой передаем, имя, 
// фамилия и возраст, и получаем строку 
// "Привет Иван Петров с возрастом 17 лет" 
// (только здесь данные, которые были переданы в функцию)

// function getUserName (name, lastName, age) {
//     return `Привет ${name} ${lastName} с возрастом ${age} лет!`
// }
// console.log(getUserName('Михаил', 'Попков', '19'));

// Написать функцию, которая принимает пол человека 
// ('M','F') в виде строки, результат функции возвращает
//  строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен

// let gender = 'erv';
// let getGenderValue = function(gender){
//     if(gender === 'M'){
//         return 'Ваш пол мужской';
//     } else if (gender === 'F') {
//         return 'Ваш пол женский';
//     } else {
//         return 'Ваш пол не опеределен';
//     }
// }
// console.log(getGenderValue(gender));

// Сделайте функцию, которая принимает 
// параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

// let numDay = 7;
// const weekDay = ['Понедельник', 'Вторник', 'Среда', 
//      'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// function selectDayName(numDay){
//     if (numDay >= 1 && numDay <= 7) {
//             return weekDay[numDay - 1];
//     } else {
//         return 'Этого не может быть!!!'
//     }
// }
// console.log(selectDayName(numDay));

// Написать функцию, которая принимает 
// строку (в этом тексте 3-5 предложений), 
// верните каждое первое слово в каждом предложении, через запятую.

// let text = 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру. Сгенерировать несколько абзацев более менее осмысленного текста. Рыбы на русском языке, поможет оратору отточить навык выступлений в домашних условиях.';
// let getSomeText = function(text) {
//     let arrayString = text.split(' ');
//     console.log(arrayString);
//     for (let i = 0; i < arrayString.length; i++) {
//         if (arrayString[i] !== arrayString[i].toLowerCase()) {
//             console.log( `${arrayString[i]}, `);
//         }
//     }
// }
// getSomeText(text);

// Написать функцию, которой передаем имя,
// и она возраващает приветствие в зависимости 
// от времени суток (Доброе утро\день\вечер\ночи Иван)

// let hours = new Date();
// let name = 'Михаил';
// let getGreeting = function (hours, name){
//     if (hours.getHours() > 5 && hours.getHours() <=12){
//         return `Доброе утро, ${name}`
//     } else if (hours.getHours() > 12 && hours.getHours() <= 16){
//         return `Добрый день, ${name}`
//     } else if (hours.getHours() > 16 && hours.getHours() <=23){
//         return `Добрый вечер, ${name}`
//     } else {
//         return `Доброй ночи, ${name} `
//     }
// }

// console.log(`${getGreeting(hours, name)} Время: ${hours.getHours()}:${hours.getMinutes()}`);

// Вывести числа от 1 до 100 в столбец. К каждой 
// цифре подписать состояние возраста (1-17 ребенок,
// 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

// let getPersonAge = function (age) {
//     if (age > 0 && age <= 17){
//         return `ребенок`;
//     } else if (age > 17 && age <= 30){
//         return `молодой`;
//     } else if (age > 30 && age <= 55){
//         return `зрелый`;
//     } else if (age > 55){
//         return `старый`;
//     } else {
//         return `Еще не родился!!!`;
//     }
// }
// console.log(getPersonAge(19));

// Создай новую функцию, в которую передаешь имя 
// и возраст человека и получаешь сообщение (Иван
// имеет возраст 44 и он зрелый). А также вызови 
// внутри своей функции, функцию из прошлого задания

// const nam = 'Михаил';
// const age = 19;
// const getPersonData = function (nam, age){
//     return `${nam} имеет возраст ${age} и он ${getPersonAge(age)}`
// }
// console.log(getPersonData(nam, age));